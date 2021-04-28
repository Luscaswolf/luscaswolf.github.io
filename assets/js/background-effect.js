if(window.innerWidth > 768){
    (function() {
        var COLORS, FRICTION, GRAVITY, MAX_FORCE, NUM_PARTICLES, Particle, TAIL_LENGTH;
      
        NUM_PARTICLES = 250;
      
        TAIL_LENGTH = 12;
      
        MAX_FORCE = 8;
      
        FRICTION = 0.75;
      
        GRAVITY = 9.81;
      
        COLORS = ['#FF4746', '#E8DA5E', '#92B55F', '#487D76'];
      
        Particle = class Particle {
          constructor(x1 = 0.0, y1 = 0.0, mass = 1.0) {
            this.x = x1;
            this.y = y1;
            this.mass = mass;
            this.tail = [];
            this.radius = this.mass * 0.15;
            this.charge = random([-1, 1]);
            this.color = random(COLORS);
            this.fx = this.fy = 0.0;
            this.vx = this.vy = 0.0;
          }
      
        };
      
        Sketch.create({
          retina: 'auto',
          particles: [],
          setup: function() {
            var i, k, m, ref, results, x, y;
            results = [];
            for (i = k = 0, ref = NUM_PARTICLES; k <= ref; i = k += 1) {
              x = random(this.width);
              y = random(this.height);
              m = random(0.5, 8.0);
              results.push(this.particles.push(new Particle(x, y, m)));
            }
            return results;
          },
          draw: function() {
            var a, b, dSq, dst, dx, dy, f, fx, fy, i, j, k, l, len, len1, n, p, rad, ref, ref1, ref2, ref3, results;
            this.lineCap = this.lineJoin = 'round';
            results = [];
            for (i = k = 0, ref = NUM_PARTICLES; k <= ref; i = k += 1) {
              a = this.particles[i];
              // invert charge
              if (random() < 0.08) {
                a.charge = -a.charge;
              }
              for (j = l = ref1 = i + 1, ref2 = NUM_PARTICLES; l <= ref2; j = l += 1) {
                b = this.particles[j];
                
                // delta vector
                dx = b.x - a.x;
                dy = b.y - a.y;
                
                // distance
                dst = sqrt(dSq = (dx * dx + dy * dy) + 0.1);
                rad = a.radius + b.radius;
                if (dst >= rad) {
                  
                  // derivative of unit length for normalisation
                  len = 1.0 / dst;
                  fx = dx * len;
                  fy = dy * len;
                  
                  // gravitational force
                  f = min(MAX_FORCE, (GRAVITY * a.mass * b.mass) / dSq);
                  a.fx += f * fx * b.charge;
                  a.fy += f * fy * b.charge;
                  b.fx += -f * fx * a.charge;
                  b.fy += -f * fy * a.charge;
                }
              }
              
              // integrate
              a.vx += a.fx;
              a.vy += a.fy;
              a.vx *= FRICTION;
              a.vy *= FRICTION;
              a.tail.unshift({
                x: a.x,
                y: a.y
              });
              if (a.tail.length > TAIL_LENGTH) {
                a.tail.pop();
              }
              a.x += a.vx;
              a.y += a.vy;
              
              // reset force
              a.fx = a.fy = 0.0;
              
              // wrap
              if (a.x > this.width + a.radius) {
                a.x = -a.radius;
                a.tail = [];
              } else if (a.x < -a.radius) {
                a.x = this.width + a.radius;
                a.tail = [];
              }
              if (a.y > this.height + a.radius) {
                a.y = -a.radius;
                a.tail = [];
              } else if (a.y < -a.radius) {
                a.y = this.height + a.radius;
                a.tail = [];
              }
              
              // draw
              this.strokeStyle = a.color;
              this.lineWidth = a.radius * 2.0;
              this.beginPath();
              this.moveTo(a.x, a.y);
              ref3 = a.tail;
              for (n = 0, len1 = ref3.length; n < len1; n++) {
                p = ref3[n];
                this.lineTo(p.x, p.y);
              }
              results.push(this.stroke());
            }
            return results;
          }
        });
      
      }).call(this);
} else {
    (function() {
        var COLORS, FRICTION, GRAVITY, MAX_FORCE, NUM_PARTICLES, Particle, TAIL_LENGTH;
      
        NUM_PARTICLES = 50;
      
        TAIL_LENGTH = 12;
      
        MAX_FORCE = 8;
      
        FRICTION = 0.75;
      
        GRAVITY = 9.81;
      
        COLORS = ['#FF4746', '#E8DA5E', '#92B55F', '#487D76'];
      
        Particle = class Particle {
          constructor(x1 = 0.0, y1 = 0.0, mass = 1.0) {
            this.x = x1;
            this.y = y1;
            this.mass = mass;
            this.tail = [];
            this.radius = this.mass * 0.15;
            this.charge = random([-1, 1]);
            this.color = random(COLORS);
            this.fx = this.fy = 0.0;
            this.vx = this.vy = 0.0;
          }
      
        };
      
        Sketch.create({
          retina: 'auto',
          particles: [],
          setup: function() {
            var i, k, m, ref, results, x, y;
            results = [];
            for (i = k = 0, ref = NUM_PARTICLES; k <= ref; i = k += 1) {
              x = random(this.width);
              y = random(this.height);
              m = random(0.5, 8.0);
              results.push(this.particles.push(new Particle(x, y, m)));
            }
            return results;
          },
          draw: function() {
            var a, b, dSq, dst, dx, dy, f, fx, fy, i, j, k, l, len, len1, n, p, rad, ref, ref1, ref2, ref3, results;
            this.lineCap = this.lineJoin = 'round';
            results = [];
            for (i = k = 0, ref = NUM_PARTICLES; k <= ref; i = k += 1) {
              a = this.particles[i];
              // invert charge
              if (random() < 0.08) {
                a.charge = -a.charge;
              }
              for (j = l = ref1 = i + 1, ref2 = NUM_PARTICLES; l <= ref2; j = l += 1) {
                b = this.particles[j];
                
                // delta vector
                dx = b.x - a.x;
                dy = b.y - a.y;
                
                // distance
                dst = sqrt(dSq = (dx * dx + dy * dy) + 0.1);
                rad = a.radius + b.radius;
                if (dst >= rad) {
                  
                  // derivative of unit length for normalisation
                  len = 1.0 / dst;
                  fx = dx * len;
                  fy = dy * len;
                  
                  // gravitational force
                  f = min(MAX_FORCE, (GRAVITY * a.mass * b.mass) / dSq);
                  a.fx += f * fx * b.charge;
                  a.fy += f * fy * b.charge;
                  b.fx += -f * fx * a.charge;
                  b.fy += -f * fy * a.charge;
                }
              }
              
              // integrate
              a.vx += a.fx;
              a.vy += a.fy;
              a.vx *= FRICTION;
              a.vy *= FRICTION;
              a.tail.unshift({
                x: a.x,
                y: a.y
              });
              if (a.tail.length > TAIL_LENGTH) {
                a.tail.pop();
              }
              a.x += a.vx;
              a.y += a.vy;
              
              // reset force
              a.fx = a.fy = 0.0;
              
              // wrap
              if (a.x > this.width + a.radius) {
                a.x = -a.radius;
                a.tail = [];
              } else if (a.x < -a.radius) {
                a.x = this.width + a.radius;
                a.tail = [];
              }
              if (a.y > this.height + a.radius) {
                a.y = -a.radius;
                a.tail = [];
              } else if (a.y < -a.radius) {
                a.y = this.height + a.radius;
                a.tail = [];
              }
              
              // draw
              this.strokeStyle = a.color;
              this.lineWidth = a.radius * 2.0;
              this.beginPath();
              this.moveTo(a.x, a.y);
              ref3 = a.tail;
              for (n = 0, len1 = ref3.length; n < len1; n++) {
                p = ref3[n];
                this.lineTo(p.x, p.y);
              }
              results.push(this.stroke());
            }
            return results;
          }
        });
      
      }).call(this);
}
  
