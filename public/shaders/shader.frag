#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform sampler2D u_tex;

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord / u_resolution.xy;

    // Time-based variables for smooth animation
    float t = u_time * 1.5;
    float t1 = sin(t) * 0.05 + 0.5;
    float t2 = cos(t) * 0.5 + 0.5;

    float r = sin(0.01 * uv.y + t1) * 0.5;
    float g = cos(3.0 * uv.y + t2) * 0.5 + 0.5;
    float b = sin(4.0 * (uv.x + uv.y) + t1 + t2) * 0.5 + 0.5;

    vec4 texColor = texture2D(u_tex, vec2(r, b));
    // Sample the texture
    float r0 = texColor.r;
    float g0 = cos(texColor.g * uv.y + t2) * 0.5 + 0.5;
    float b0 = texColor.b;
    vec4 texColor0 = vec4(r0, g0, b0, 1.0);
    // vec4 debugColor = vec4(r, g, b, 1.0);
    fragColor = texColor;
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
