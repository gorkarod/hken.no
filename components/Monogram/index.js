import React from 'react'
import { Icon } from 'components/icons'
import './style.scss'

const Monogram = ({ className = 'monogram', style = {} }) => (
  <Icon
    name="Monogram"
    className={className}
    viewBox="0 0 64 64"
    style={style}
    path={
      `m 10.833,16.877 c -0.036,-2.862 2.141,-4.665 5.435,-4.076 3.294,0.589
      4.047,4.759 1.882,6.950 -2.941,2.945 -9.364,2.945 -12.234,-0.707
        -5.141,-6.361 1.494,-16.256 10.940,-15.432 6.329,0.568 11.034,7.386
      10.576,13.665 -0.314,4.241 -1.859,8.788 -4.000,12.958 -2.576,5.018
        -7.176,9.471 -12.940,9.659 -3.294,0.107 -6.894,-2.356 -6.352,-5.890
      0.699,-4.594 5.764,-6.997 9.999,-7.421 8.235,-0.821 16.469,0.941
      24.704,-0.019 7.105,-0.832 16.587,-3.934 20.469,-11.273 1.682,-3.192
      2.400,-7.197 -1.039,-9.930 -3.423,-2.721 -9.329,-0.954 -12.352,1.178
        -5.188,3.687 -7.788,10.354 -9.646,16.492 -3.200,10.590 -6.235,21.557
        -12.940,30.627 -2.823,3.840 -7.646,7.292 -12.940,6.125 -3.176,-0.699
        -6.823,-5.207 -5.964,-8.269 1.188,-4.241 4.823,-5.030 8.940,-5.478
      6.588,-0.703 14.352,3.510 19.057,7.386 4.094,3.428 9.164,7.516
      15.293,6.479 7.399,-1.249 11.999,-8.599 12.940,-15.314 0.736,-5.301
        -1.823,-11.250 -7.176,-12.958 -7.235,-2.309 -15.293,2.603 -16.469,9.659
        -0.669,3.899 2.812,7.033 6.470,7.657 4.341,0.749 8.505,-3.181
      7.882,-7.421 -0.463,-3.181 -7.658,-3.864 -7.752,0.958 -0.126,6.467
        -8.329,9.000 -13.411,8.022 -9.058,-1.767 -16.234,-12.251
        -16.822,-21.793 -1.000,-13.782 10.587,-28.036 28.115,-21.910
      2.882,1.008 6.258,4.335 6.917,6.785 1.412,5.207 0.755,8.458 1.553,12.015
      1.176,5.254 3.176,7.468 4.200,6.997 1.020,-0.464 1.306,-1.885
      1.259,-4.653 -0.074,-4.264 -0.921,-4.229 -2.882,-4.135 -2.588,0.126
        -8.129,0.707 -15.763,0.915 -2.835,0.077 -2.541,2.038 -2.800,2.061
        -6.035,0.349 -11.281,0.451 -13.999,0.756 l 0.289,0.588 c 6.294,-0.517
      10.634,-0.647 13.646,-0.813 0.135,4.818 1.388,6.055 4.576,6.279
      2.341,0.117 4.905,-0.914 5.905,-2.556 2.223,-3.652 1.235,-5.489
      3.811,-5.513 1.753,-0.018 3.588,5.560 4.776,8.505 1.089,2.709 3.529,5.843
      2.000,8.670 -1.294,2.391 -7.999,0.742 -7.999,0.742 0,0 1.270,3.887
        -0.259,3.887 -2.823,-0.007 -8.588,0.353 -10.117,-4.123 1.647,4.406
      7.294,4.123 10.117,4.123 1.176,1.120e-4 0.508,0.825 1.294,5.301
      0.414,2.356 0.672,4.783 -1.118,6.008 -5.894,4.040 -16.352,-1.649
        -20.822,-4.406 -4.376,-2.674 -8.811,-5.902 -11.764,-10.484
        -1.518,-2.368 0.765,-5.430 1.647,-6.008 -3.647,2.945 -4.882,-3.063
        -5.647,-6.008 -0.951,-3.652 0.229,-9.282 6.117,-8.128 3.764,0.735
      3.882,7.975 6.588,8.364 3.294,0.478 2.800,-6.585 1.529,-9.070
        -1.494,-2.933 -3.741,-6.585 -2.353,-9.895 1.318,-3.110 5.529,-2.544
      8.352,-2.120 4.117,0.615 9.340,2.780 13.646,1.133 3.764,-1.449
        -2.823,-6.550 -8.235,-7.598 -4.941,-0.931 -13.175,-2.603 -21.763,2.179
        -5.329,2.969 -8.717,8.481 -9.529,14.489 -1.223,9.070 2.447,17.081
      9.411,22.028 6.352,4.712 17.175,4.359 14.352,-7.775 -2.353,-10.013
        -17.410,-10.837 -17.528,-18.494 z`
    }
  />
)
Monogram.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
}
export { Monogram }
