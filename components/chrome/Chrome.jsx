import React from 'react';
import PropTypes from 'prop-types';
import reactCSS from 'reactcss';
import merge from 'lodash/merge';

import { ColorWrap, Saturation, Hue } from '../common';
import ChromePointer from './ChromePointer';
import ChromePointerCircle from './ChromePointerCircle';

export const Chrome = ({
  width,
  onChange,
  rgb,
  hsl,
  hsv,
  hex,
  renderers,
  styles: passedStyles = {},
  className = '',
}) => {
  const styles = reactCSS(
    merge(
      {
        default: {
          picker: {
            width,
            background: '#fff',
            borderRadius: '2px',
            boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
            boxSizing: 'initial',
            fontFamily: 'Menlo',
            position: 'absolute',
            left: '11rem',
            top: '0',
            zIndex: '1000',
          },
          saturation: {
            width: '100%',
            paddingBottom: '55%',
            position: 'relative',
            borderRadius: '2px 2px 0 0',
            overflow: 'hidden',
          },
          Saturation: {
            radius: '2px 2px 0 0',
          },
          body: {
            padding: '10px 12px',
          },
          controls: {
            display: 'flex',
          },
          color: {
            width: '32px',
          },
          toggles: {
            flex: '1',
          },
          hue: {
            height: '10px',
            position: 'relative',
          },
          Hue: {
            radius: '2px',
          },
        },
      },
      passedStyles
    )
  );

  return (
    <div style={styles.picker} className={`chrome-picker ${className}`}>
      <div style={styles.saturation}>
        <Saturation
          style={styles.Saturation}
          hsl={hsl}
          hsv={hsv}
          pointer={ChromePointerCircle}
          onChange={onChange}
        />
      </div>
      <div style={styles.body}>
        <div style={styles.controls} className="flexbox-fix">
          <div style={styles.toggles}>
            <div style={styles.hue}>
              <Hue style={styles.Hue} hsl={hsl} pointer={ChromePointer} onChange={onChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(['hex', 'rgb', 'hsl']),
  onChange: PropTypes.func
};

Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {},
};

export default ColorWrap(Chrome);
