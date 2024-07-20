#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_tex;
uniform float u_myTime;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2 uv = fragCoord / u_resolution.xy;
    vec4 texColor = texture2D(u_tex, uv);
    float t = u_myTime * 0.5;
    if (uv.y > 0.5) {
      uv.y /= 0.5 + t;
      texColor = texture2D(u_tex, uv);
    } else {
      uv.y = 1.0 - uv.y;
      uv.y /= 0.5 + t;
      uv.y = 1.0 - uv.y;
      texColor = texture2D(u_tex, uv);
    }

    fragColor = texColor;
}


void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}