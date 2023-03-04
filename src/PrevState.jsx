import React, { useState, useEffect, useRef } from 'react';
import './style.css';

export default function PrevState(props) {
  let value = useRef();
  useEffect(() => {
    value.current = props.count;
    console.log('22222222222', value);
  }, [props.count]);
  return value.current;
}
