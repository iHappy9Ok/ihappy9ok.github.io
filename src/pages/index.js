import React from 'react';
import {Redirect} from '@docusaurus/router';
import Head from '@docusaurus/Head';



export default function Home() {
  return (
    // <>
    //   <div>123</div>
    // </>
     <Redirect to="/docs/init" />
  );
}
