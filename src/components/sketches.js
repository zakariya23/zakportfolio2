import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Sketch = () => {
  const myRef = useRef();

  useEffect(() => {
    let sketch = (p) => {
      // Initialize variables
      let gridTopX;
      let gridTopY;
      const sideLength = 25;
      const cubes = [];

      p.setup = () => {
        // Setup the canvas
        p.createCanvas(p.windowWidth, p.windowHeight * 0.3); // replace 300 with the height you want
        gridTopX = p.width / 2;
        gridTopY = p.height / 2;
        p.strokeWeight(2);

        cubes.push(new Cube(0, 0, 0));

        // Populate the cubes array up to 500 elements
        while (cubes.length < 500) {
          addRandomCube();
        }

        // Sort so the cubes are drawn in the right order
        cubes.sort((a, b) => {
          return a.getSortString().localeCompare(b.getSortString());
        });
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight * 0.3);
      gridTopX = p.width / 2;
      gridTopY = p.height / 2;
    };


    p.mousePressed = () => {
        // Function to handle mouse click
        for(let i = cubes.length - 1; i >= 0; i--) {
          const cube = cubes[i];
          const x = gridTopX + (cube.c - cube.r) * sideLength * Math.sqrt(3) / 2;
          const y = gridTopY + (cube.c + cube.r) * sideLength / 2 - (sideLength * cube.z);

          // Calculate the distance between the clicked point and the center of each cube
          const distance = Math.sqrt((x - p.mouseX) ** 2 + (y - p.mouseY) ** 2);

          // Check if the distance is less than the radius (which is the sideLength divided by 2)
          if (distance < sideLength / 2) {
            // Remove this cube
            cubes.splice(i, 1);
            // Once we found a cube, stop the loop
            break;
          }
        }
      };



      p.keyPressed = () => {
        // Remove a cube on key press
        if (cubes.length > 1) {
          cubes.pop();
        }
      };

      p.draw = () => {
        // Draw background and cubes
        p.background(800);
        for (const cube of cubes) {
          cube.draw();
        }
      };

      function addRandomCube() {
        // Function to add a cube at random position
        let cubeAdded = false;

        while (!cubeAdded) {
          const randomCube = p.random(cubes);

          let newCubeC = randomCube.c;
          let newCubeR = randomCube.r;
          let newCubeZ = randomCube.z;

          const r = p.random(1);
          if (r < .3) {
            newCubeC += p.floor(p.random(19));
          } else if (r < .6) {
            newCubeR += p.floor(p.random(19));
          } else {
            newCubeZ += p.floor(p.random(19));
          }

          const spotTaken = cubes.some((cube) => {
            return cube.c == newCubeC &&
              cube.r == newCubeR &&
              cube.z == newCubeZ;
          });

          if (!spotTaken) {
            cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
            cubeAdded = true;
          }
        }
    }


      class Cube {
        // Cube class
        constructor(c, r, z) {
          this.c = c;
          this.r = r;
          this.z = z;
          // Set cube color to white
          this.red = 255;
          this.green = 255;
          this.blue = 255;
        }

        draw() {
          // Draw the cube
          const x = gridTopX + (this.c - this.r) * sideLength *
            Math.sqrt(3) / 2;
          const y = gridTopY + (this.c + this.r) * sideLength / 2 -
            (sideLength * this.z);

          const points = [];
          for (let angle = p.PI / 6; angle < p.PI * 2; angle += p.PI / 3) {
            points.push(
              p.createVector(x + p.cos(angle) * sideLength,
                y + p.sin(angle) * sideLength));
          }

          p.fill(this.red * .75, this.green * .75, this.blue * .75);
          p.quad(x, y,
            points[5].x, points[5].y,
            points[0].x, points[0].y,
            points[1].x, points[1].y);

          p.fill(this.red * .9, this.green * .9, this.blue * .9);
          p.quad(x, y,
            points[1].x, points[1].y,
            points[2].x, points[2].y,
            points[3].x, points[3].y);

          p.fill(this.red, this.green, this.blue);
          p.quad(x, y,
            points[3].x, points[3].y,
            points[4].x, points[4].y,
            points[5].x, points[5].y);
        }

        getSortString() {
          // Get sort string
          return this.z + '.' + this.r + '.' + this.c;
        }
      }
    };

    new p5(sketch, myRef.current);
  }, []);

  return (
    <div ref={myRef}></div>
  );
};

export default Sketch;
