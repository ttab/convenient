mod-cons
===========

![Build Status](https://img.shields.io/travis/ttab/mod-cons.svg)
![Version](https://img.shields.io/npm/v/mod-cons.svg)
![Licens](https://img.shields.io/npm/l/mod-cons.svg)

Modern conveniences for native JavaScript promises. 

Have you switched to native promises but miss the convenience of
`Q.nfcall`? This library contains a low-footprint reimplementations of
[Q] convenience functions meant to be run on top of native ES5
promises. 

No messy dependencies. No half-baked home-rolled Promise
implementation. No wrappers.

  - [ninvoke / nsend][ninvoke]
  - [nfcall]
  - [nfapply]
  - [nfbind / denodeify][nfbind]
  - [nbind]
  - [npost][npost]

[Q]:https://github.com/kriskowal/q/
[ninvoke]:https://github.com/kriskowal/q/wiki/API-Reference#qninvokeobject-methodname-args
[nfcall]:https://github.com/kriskowal/q/wiki/API-Reference#qnfcallfunc-args
[nfapply]:https://github.com/kriskowal/q/wiki/API-Reference#qnfapplynodefunc-args
[nfbind]:https://github.com/kriskowal/q/wiki/API-Reference#qnfbindnodefunc-args
[npost]:https://github.com/kriskowal/q/wiki/API-Reference#qnpostobject-methodname-args
[nbind]:https://github.com/kriskowal/q/wiki/API-Reference#qnbindnodemethod-thisarg-args
