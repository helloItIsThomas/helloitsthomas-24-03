precision mediump float;
uniform sampler2D u_tex0;
varying vec2 v_texcoord;

void main(void) {
  gl_FragColor = vec4(v_texcoord.r, 1.0, 1.0, 1.0);
}