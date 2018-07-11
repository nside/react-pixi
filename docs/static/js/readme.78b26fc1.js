(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./README.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),p=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");n.default=function(e){var n=e.components;return p.a.createElement(o.MDXTag,{name:"wrapper",components:n},p.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"react-fiber-renderer-for-pixi"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#react-fiber-renderer-for-pixi"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"React Fiber renderer for PIXI"),p.a.createElement(o.MDXTag,{name:"p",components:n},p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/tested_with-jest-green.svg",alt:null}})," ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://circleci.com/gh/inlet/react-pixi-fiber"}},p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"a",props:{src:"https://img.shields.io/circleci/project/github/inlet/react-pixi/master.svg",alt:"CircleCI"}}))," ",p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/license-MIT-green.svg",alt:null}})," ",p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/code_style-prettier-blue.svg",alt:null}})," ",p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/react-fiber-ff69b4.svg",alt:null}})," ",p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://img.shields.io/badge/pixi-v4+-ff69b4.svg",alt:null}})),p.a.createElement(o.MDXTag,{name:"p",components:n},"A custom React 16+ (Fiber) renderer. Write ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://www.pixijs.com/"}},"PIXI")," applications using React declarative style."),p.a.createElement(o.MDXTag,{name:"p",components:n},p.a.createElement(o.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"https://user-images.githubusercontent.com/232559/37669267-b46a8f8e-2c66-11e8-96e7-cae2ae6bdd7d.png",alt:null}})),p.a.createElement(o.MDXTag,{name:"p",components:n},"Collaborate on Github: ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/inlet/react-pixi"}},"https://github.com/inlet/react-pixi")),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"install"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#install"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Install"),p.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"node"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#node"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Node"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"npm install @inlet/react-pixi --save\n")),p.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"browser"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#browser"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Browser"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<script src="//unpkg.com/@inlet/react-pixi@latest/dist/react-pixi.production.umd.js"><\/script>\n<script>\n  // window.ReactPixi\n<\/script>\n')),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"usage"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#usage"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Usage"),p.a.createElement(o.MDXTag,{name:"h4",components:n,props:{id:"with-react-dom"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#with-react-dom"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"With React-DOM"),p.a.createElement(o.MDXTag,{name:"p",components:n},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Stage")," renders a canvas element. All child components are rendered on the canvas."),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { Stage, Sprite } from '@inlet/react-pixi'\n\nconst App = () => (\n  <Stage>\n    <Sprite image=\"./bunny.png\" x={100} y={100} />\n  </Stage>\n)\n")),p.a.createElement(o.MDXTag,{name:"h4",components:n,props:{id:"without-react-dom"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h4",props:{"aria-hidden":!0,href:"#without-react-dom"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Without React-DOM"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { render, Text } from '@inlet/react-pixi'\nimport * as PIXI from 'pixi.js'\n\n// init PIXI.Application manually\nconst app = new PIXI.Application(800, 600, {\n  backgroundColor: 0x10bb99,\n  view: document.getElementById('container')\n})\n\n// Use the custom renderer to render a valid PIXI object into a PIXI container.\nrender(<Text text=\"Hello World\" x={200} y={200} />, app.stage)\n")),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"examples"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#examples"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Examples"),p.a.createElement(o.MDXTag,{name:"p",components:n},"Watch the ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://codepen.io/collection/XPpGdb"}},"collection on codepen"),"."),p.a.createElement(o.MDXTag,{name:"ul",components:n},p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/zWEaoR"}},"Text")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/aYLvrZ"}},"Sprite - Rotating Bunny")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/rdGvQj"}},"Tiling Sprite")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/vRejPV"}},"Graphics")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/NYazPq"}},"Interaction - Click")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/RMLWxV"}},"Rope")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/RMLJKm"}},"Custom Components")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/JLrBqK"}},"NineSlicePlane")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://codepen.io/inlet/pen/PRJdgg"}},"Custom Render - Without Stage"))),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"custom-components"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#custom-components"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Custom Components"),p.a.createElement(o.MDXTag,{name:"p",components:n},"Currently the following Components are implemented by default:"),p.a.createElement(o.MDXTag,{name:"ul",components:n},p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Container.html"}},"Container")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.particles.ParticleContainer.html"}},"ParticleContainer")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html"}},"Sprite")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.extras.TilingSprite.html"}},"TilingSprite")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Graphics.html"}},"Graphics")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.Mesh.html"}},"Mesh")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.Rope.html"}},"Rope")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.Text.html"}},"Text")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.extras.BitmapText.html"}},"BitmapText")),p.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"http://pixijs.download/dev/docs/PIXI.mesh.NineSlicePlane.html"}},"NineSlicePlane"))),p.a.createElement(o.MDXTag,{name:"p",components:n},"You can easily add new components to your project:"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// ./components/Rectangle.js\n\nimport * as PIXI from 'pixi.js'\nimport { PixiComponent } from '@inlet/react-pixi'\n\nexport default new PixiComponent('Rectangle', {\n  create: props => {\n    return new PIXI.Graphics()\n  },\n  didMount: (instance, parent) => {\n    // apply custom logic on mount\n  },\n  willUnmount: (instance, parent) => {\n    // clean up before removal\n  },\n  applyProps: (instance, oldProps, newProps) => {\n    const { fill, x, y, width, height } = newProps\n    instance.clear()\n    instance.beginFill(fill)\n    instance.drawRect(x, y, width, height)\n    instance.endFill()\n  }\n})\n")),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// App.js\n\nimport { Stage } from '@inlet/react-pixi'\nimport Rectangle from './components/Rectangle'\nexport default () => (\n  <Stage>\n    <Rectangle x={100} \n               y={100} \n               width={500} \n               heigth={300} \n               fill={0xff0000} />\n  </Stage>\n)\n")),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"access-pixi-application"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#access-pixi-application"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Access PIXI Application"),p.a.createElement(o.MDXTag,{name:"p",components:n},"Accessing the ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," instance in your child components."),p.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"via-render-props-function-as-child"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#via-render-props-function-as-child"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Via Render Props (function as child)"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// App.js\n\nimport { Stage, Container, Provider } from '@inlet/react-pixi'\nimport { RotatingBunny } from './components/RotatingBunny'\n\nexport default () => (\n  <Stage>\n    <Container>\n      <Provider>\n        {app => <RotatingBunny app={app} />}\n      </Provider>\n    </Container>\n  </Stage>\n)\n")),p.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"via-higher-order-component-withpixiapp"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#via-higher-order-component-withpixiapp"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Via Higher Order Component ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"withPixiApp")),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// App.js\n\nimport { Stage, Container, withPixiApp } from '@inlet/react-pixi'\nimport { RotatingBunny } from './components/RotatingBunny'\n\nconst BunnyWithApp = withPixiApp(RotatingBunny)\n\nexport default () => (\n  <Stage>\n    <Container>\n      <BunnyWithApp />\n    </Container>\n  </Stage>\n)\n")),p.a.createElement(o.MDXTag,{name:"p",components:n},"For the sake of completeness, the ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"RotatingBunny")," component could look something like this:"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"// ./components/RotatingBunny.js\n\nimport { Sprite } from '@inlet/react-pixi'\n\nclass RotatingBunny extends React.Component {\n\n  state = { rotation: 0 }\n\n  componenDidMount() {\n    // listen to tick events (raf)\n    this.props.app.ticker.add(this.tick)\n  }\n  \n  componentWillUnmount() {\n    // stop listening for tick events\n    this.props.app.ticker.remove(this.tick)\n  }\n  \n  tick(delta) {\n    // rotate this sucker \ud83d\ude4c\n    this.setState(({ rotation }) => ({\n      rotation + 0.1 * delta\n    }))\n  }\n  \n  render() {\n    return <Sprite image=\"./bunny.png\" rotation={this.state.rotation} />\n  }\n}\n")),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"stage"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#stage"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Stage"),p.a.createElement(o.MDXTag,{name:"p",components:n},"Renders a ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," in a prebuilt React component using React-DOM."),p.a.createElement(o.MDXTag,{name:"p",components:n},"See ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#usage"}},"Usage")),p.a.createElement(o.MDXTag,{name:"p",components:n},"Example:"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { render } from 'react-dom'\nimport { Stage, Container } from '@inlet/react-pixi'\n\nconst App = () => (\n  <Stage width={500} height={400} options={{ backgroundColor: 0xff0000 }}>\n    <Container></Container>\n  </Stage>\n)\n\nrender(<App />, document.getElementById('root'))\n")),p.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"props"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#props"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Props"),p.a.createElement(o.MDXTag,{name:"table",components:n},p.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},p.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),p.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"),p.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default value"))),p.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"width")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the width of the renderers view"),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"800"))),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"height")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the height of the renderers view"),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"800"))),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onMount")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"callback function for the created app instance"),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onUnMount")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"callback function when the Stage gets unmounted"),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"raf")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"use the internal PIXI ticker (requestAnimationFrame)"),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true"))),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"renderOnComponentChange")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"render stage on Stage changes? only useful in combination with ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"raf")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true"))),p.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"options")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"see ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"http://pixijs.download/release/docs/PIXI.Application.html"}},"PIXI.Application options")),p.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})))),p.a.createElement(o.MDXTag,{name:"p",components:n},"The Stage stores the created ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PIXI.Application")," instance to context, which can be accessed using a ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#access-application"}},"Provider or a Higher\nOrder Component"),"."),p.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"components"}},p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#components"}},p.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Components"),p.a.createElement(o.MDXTag,{name:"p",components:n},"Pass down PIXI options as props. Reference the ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/index.html"}},"PIXI documentation")," to see what properties can be applied."),p.a.createElement(o.MDXTag,{name:"p",components:n},"For example The Sprite can have ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html#x"}},"x")," and ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html#x"}},"y")," values as writable members:"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { Sprite } from '@inlet/pixi-react'\n\nconst MyComponent = () => (\n  <Sprite image=\".image.png\" x={100} y={200} />\n)\n")),p.a.createElement(o.MDXTag,{name:"p",components:n},"The ",p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"image")," prop here is shorthand for ",p.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://pixijs.download/release/docs/PIXI.Sprite.html#.fromImage"}},p.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"PIXI.Sprite.fromImage()")),":"),p.a.createElement(o.MDXTag,{name:"pre",components:n},p.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { Sprite } from '@inlet/pixi-react'\n\nconst texture = new PIXI.Sprite.fromImage('./image.png')\n\nconst MyComponent = () => (\n  <Sprite texture={texture} x={100} y={200} />\n)\n")))}}}]);