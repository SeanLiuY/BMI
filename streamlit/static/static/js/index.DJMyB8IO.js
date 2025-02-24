import{bx as w,r as g,bH as ae,bI as T,bJ as x,y as le,G as ce,j as S,bK as se,az as ue,z as de,bt as fe,aF as ge,bC as he,bu as be,bd as me,bL as ve,bM as pe}from"./index.tKq1MI69.js";import{a as $e}from"./useBasicWidgetState.CrWJw_3x.js";import"./FormClearHelper.DIqStDSC.js";var F=Object.freeze({default:"default",toggle:"toggle",toggle_round:"toggle"}),ye=Object.freeze({top:"top",right:"right",bottom:"bottom",left:"left"});function q(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function P(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?q(Object(o),!0).forEach(function(r){G(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function G(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ke(e){var t=e.$disabled,o=e.$checked,r=e.$error,i=e.$isIndeterminate,l=e.$theme,n=e.$isFocusVisible,c=l.colors;return t?c.tickFillDisabled:o||i?"transparent":r?c.borderNegative:n?c.borderSelected:c.tickBorder}function Te(e){var t=e.$labelPlacement,o=t===void 0?"":t,r=e.$theme,i=r.sizing,l=i.scale300,n;switch(o){case"top":n="Bottom";break;case"bottom":n="Top";break;case"left":n="Right";break;default:case"right":n="Left";break}return r.direction==="rtl"&&n==="Left"?n="Right":r.direction==="rtl"&&n==="Right"&&(n="Left"),G({},"padding".concat(n),l)}function xe(e){var t=e.$disabled,o=e.$checked,r=e.$isIndeterminate,i=e.$error,l=e.$isHovered,n=e.$isActive,c=e.$theme,a=c.colors;return t?o||r?a.tickFillDisabled:a.tickFill:i&&(r||o)?n?a.tickFillErrorSelectedHoverActive:l?a.tickFillErrorSelectedHover:a.tickFillErrorSelected:i?n?a.tickFillErrorHoverActive:l?a.tickFillErrorHover:a.tickFillError:r||o?n?a.tickFillSelectedHoverActive:l?a.tickFillSelectedHover:a.tickFillSelected:n?a.tickFillActive:l?a.tickFillHover:a.tickFill}function we(e){var t=e.$disabled,o=e.$theme,r=o.colors;return t?r.contentSecondary:r.contentPrimary}var M=w("label",function(e){var t=e.$disabled,o=e.$labelPlacement;return{flexDirection:o==="top"||o==="bottom"?"column":"row",display:"flex",alignItems:o==="top"||o==="bottom"?"center":"flex-start",cursor:t?"not-allowed":"pointer",userSelect:"none"}});M.displayName="Root";M.displayName="Root";var _=w("span",function(e){var t=e.$checked,o=e.$disabled,r=e.$error,i=e.$isIndeterminate,l=e.$theme,n=e.$isFocusVisible,c=l.sizing,a=l.animation,s=o?l.colors.tickMarkFillDisabled:r?l.colors.tickMarkFillError:l.colors.tickMarkFill,y=encodeURIComponent(`
    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0.5H0V3.5H14V0.5Z" fill="`.concat(s,`"/>
    </svg>
  `)),u=encodeURIComponent(`
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="`.concat(s,`"/>
    </svg>
  `)),h=l.borders.checkboxBorderRadius,b=ke(e);return{flex:"0 0 auto",transitionDuration:a.timing200,transitionTimingFunction:a.easeOutCurve,transitionProperty:"background-image, border-color, background-color",width:c.scale700,height:c.scale700,left:"4px",top:"4px",boxSizing:"border-box",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:"3px",borderRightWidth:"3px",borderTopWidth:"3px",borderBottomWidth:"3px",borderLeftColor:b,borderRightColor:b,borderTopColor:b,borderBottomColor:b,borderTopLeftRadius:h,borderTopRightRadius:h,borderBottomRightRadius:h,borderBottomLeftRadius:h,outline:n&&t?"3px solid ".concat(l.colors.accent):"none",display:"inline-block",verticalAlign:"middle",backgroundImage:i?"url('data:image/svg+xml,".concat(y,"');"):t?"url('data:image/svg+xml,".concat(u,"');"):null,backgroundColor:xe(e),backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"contain",marginTop:l.sizing.scale0,marginBottom:l.sizing.scale0,marginLeft:l.sizing.scale0,marginRight:l.sizing.scale0}});_.displayName="Checkmark";_.displayName="Checkmark";var I=w("div",function(e){var t=e.$theme,o=t.typography;return P(P(P({verticalAlign:"middle"},Te(e)),{},{color:we(e)},o.LabelMedium),{},{lineHeight:"24px"})});I.displayName="Label";I.displayName="Label";var z=w("input",{opacity:0,width:0,height:0,overflow:"hidden",margin:0,padding:0,position:"absolute"});z.displayName="Input";z.displayName="Input";var H=w("div",function(e){var t=e.$theme.colors.toggleFill;return e.$disabled?t=e.$theme.colors.toggleFillDisabled:e.$checked&&e.$error?t=e.$theme.colors.tickFillErrorSelected:e.$checked&&(t=e.$theme.colors.toggleFillChecked),{backgroundColor:t,borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",boxShadow:e.$isFocusVisible?"0 0 0 3px ".concat(e.$theme.colors.accent):e.$isHovered&&!e.$disabled?e.$theme.lighting.shadow500:e.$theme.lighting.shadow400,outline:"none",height:e.$theme.sizing.scale700,width:e.$theme.sizing.scale700,transform:e.$checked?"translateX(".concat(e.$theme.direction==="rtl"?"-100%":"100%",")"):null,transition:"transform ".concat(e.$theme.animation.timing200)}});H.displayName="Toggle";H.displayName="Toggle";var D=w("div",function(e){var t=e.$theme.colors.toggleTrackFill;return e.$disabled?t=e.$theme.colors.toggleTrackFillDisabled:e.$error&&e.$checked&&(t=e.$theme.colors.tickFillError),{alignItems:"center",backgroundColor:t,borderTopLeftRadius:"7px",borderTopRightRadius:"7px",borderBottomRightRadius:"7px",borderBottomLeftRadius:"7px",display:"flex",height:e.$theme.sizing.scale550,marginTop:e.$theme.sizing.scale200,marginBottom:e.$theme.sizing.scale100,marginLeft:e.$theme.sizing.scale200,marginRight:e.$theme.sizing.scale100,width:e.$theme.sizing.scale1000}});D.displayName="ToggleTrack";D.displayName="ToggleTrack";function E(e){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},$.apply(this,arguments)}function Re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Se(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e,t,o){return t&&Se(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},B(e,t)}function Ce(e){var t=Pe();return function(){var r=L(e),i;if(t){var l=L(this).constructor;i=Reflect.construct(r,arguments,l)}else i=r.apply(this,arguments);return Oe(this,i)}}function Oe(e,t){if(t&&(E(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Pe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},L(e)}function p(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Ee=function(t){return t.stopPropagation()},K=function(e){Le(o,e);var t=Ce(o);function o(){var r;Re(this,o);for(var i=arguments.length,l=new Array(i),n=0;n<i;n++)l[n]=arguments[n];return r=t.call.apply(t,[this].concat(l)),p(v(r),"state",{isFocused:r.props.autoFocus||!1,isFocusVisible:!1,isHovered:!1,isActive:!1}),p(v(r),"onMouseEnter",function(c){r.setState({isHovered:!0}),r.props.onMouseEnter(c)}),p(v(r),"onMouseLeave",function(c){r.setState({isHovered:!1,isActive:!1}),r.props.onMouseLeave(c)}),p(v(r),"onMouseDown",function(c){r.setState({isActive:!0}),r.props.onMouseDown(c)}),p(v(r),"onMouseUp",function(c){r.setState({isActive:!1}),r.props.onMouseUp(c)}),p(v(r),"onFocus",function(c){r.setState({isFocused:!0}),r.props.onFocus(c),ae(c)&&r.setState({isFocusVisible:!0})}),p(v(r),"onBlur",function(c){r.setState({isFocused:!1}),r.props.onBlur(c),r.state.isFocusVisible!==!1&&r.setState({isFocusVisible:!1})}),r}return Fe(o,[{key:"componentDidMount",value:function(){var i=this.props,l=i.autoFocus,n=i.inputRef;l&&n.current&&n.current.focus()}},{key:"render",value:function(){var i=this.props,l=i.overrides,n=l===void 0?{}:l,c=i.onChange,a=i.labelPlacement,s=a===void 0?this.props.checkmarkType===F.toggle?"left":"right":a,y=i.inputRef,u=i.isIndeterminate,h=i.error,b=i.disabled,R=i.value,f=i.name,m=i.type,d=i.checked,C=i.children,O=i.required,Y=i.title,j=n.Root,V=n.Checkmark,W=n.Label,A=n.Input,N=n.Toggle,U=n.ToggleTrack,Z=T(j)||M,J=T(V)||_,Q=T(W)||I,ee=T(A)||z,te=T(N)||H,re=T(U)||D,oe={onChange:c,onFocus:this.onFocus,onBlur:this.onBlur},ie={onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},k={$isFocused:this.state.isFocused,$isFocusVisible:this.state.isFocusVisible,$isHovered:this.state.isHovered,$isActive:this.state.isActive,$error:h,$checked:d,$isIndeterminate:u,$required:O,$disabled:b,$value:R},X=C&&g.createElement(Q,$({$labelPlacement:s},k,x(W)),this.props.containsInteractiveElement?g.createElement("div",{onClick:function(ne){return ne.preventDefault()}},C):C);return g.createElement(Z,$({"data-baseweb":"checkbox",title:Y||null,$labelPlacement:s},k,ie,x(j)),(s==="top"||s==="left")&&X,this.props.checkmarkType===F.toggle?g.createElement(re,$({},k,x(U)),g.createElement(te,$({},k,x(N)))):g.createElement(J,$({},k,x(V))),g.createElement(ee,$({value:R,name:f,checked:d,required:O,"aria-label":this.props["aria-label"]||this.props.ariaLabel,"aria-checked":u?"mixed":d,"aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":h||null,"aria-required":O||null,disabled:b,type:m,ref:y,onClick:Ee},k,oe,x(A))),(s==="bottom"||s==="right")&&X)}}]),o}(g.Component);p(K,"defaultProps",{overrides:{},checked:!1,containsInteractiveElement:!1,disabled:!1,autoFocus:!1,isIndeterminate:!1,inputRef:g.createRef(),error:!1,type:"checkbox",checkmarkType:F.default,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseDown:function(){},onMouseUp:function(){},onFocus:function(){},onBlur:function(){}});function Be({width:e,element:t,disabled:o,widgetMgr:r,fragmentId:i}){var R;const[l,n]=$e({getStateFromWidgetMgr:Me,getDefaultStateFromProto:_e,getCurrStateFromProto:Ie,updateWidgetMgrState:ze,element:t,widgetMgr:r,fragmentId:i}),c=g.useCallback(f=>{n({value:f.target.checked,fromUi:!0})},[n]),a=le(),{colors:s,spacing:y,sizes:u}=a,h=ce(a),b=o?s.fadedText40:s.bodyText;return S(pe,{className:"row-widget stCheckbox","data-testid":"stCheckbox",width:e,children:S(K,{checked:l,disabled:o,onChange:c,"aria-label":t.label,checkmarkType:t.type===se.StyleType.TOGGLE?F.toggle:F.default,labelPlacement:ye.right,overrides:{Root:{style:({$isFocusVisible:f})=>({marginBottom:y.none,marginTop:y.none,backgroundColor:f?s.darkenedBgMix25:"",display:"flex",alignItems:"start"})},Toggle:{style:({$checked:f})=>{let m=h?s.bgColor:s.bodyText;return o&&(m=h?s.gray70:s.gray90),{width:`calc(${u.checkbox} - ${a.spacing.twoXS})`,height:`calc(${u.checkbox} - ${a.spacing.twoXS})`,transform:f?`translateX(${u.checkbox})`:"",backgroundColor:m,boxShadow:""}}},ToggleTrack:{style:({$checked:f,$isHovered:m})=>{let d=s.fadedText40;return m&&!o&&(d=s.fadedText20),f&&!o&&(d=s.primary),{marginRight:0,marginLeft:0,marginBottom:0,marginTop:a.spacing.twoXS,paddingLeft:a.spacing.threeXS,paddingRight:a.spacing.threeXS,width:`calc(2 * ${u.checkbox})`,minWidth:`calc(2 * ${u.checkbox})`,height:u.checkbox,minHeight:u.checkbox,borderBottomLeftRadius:a.radii.full,borderTopLeftRadius:a.radii.full,borderBottomRightRadius:a.radii.full,borderTopRightRadius:a.radii.full,backgroundColor:d}}},Checkmark:{style:({$isFocusVisible:f,$checked:m})=>{const d=m&&!o?s.primary:s.fadedText40;return{outline:0,width:u.checkbox,height:u.checkbox,marginTop:a.spacing.twoXS,marginLeft:0,marginBottom:0,boxShadow:f&&m?`0 0 0 0.2rem ${ue(s.primary,.5)}`:"",borderLeftWidth:u.borderWidth,borderRightWidth:u.borderWidth,borderTopWidth:u.borderWidth,borderBottomWidth:u.borderWidth,borderLeftColor:d,borderRightColor:d,borderTopColor:d,borderBottomColor:d}}},Label:{style:{lineHeight:a.lineHeights.small,paddingLeft:a.spacing.sm,position:"relative",color:b}}},children:de(ve,{visibility:fe((R=t.labelVisibility)==null?void 0:R.value),"data-testid":"stWidgetLabel",children:[S(ge,{source:t.label,allowHTML:!1,isLabel:!0,largerLabel:!0}),t.help&&S(he,{color:b,children:S(be,{content:t.help,placement:me.TOP_RIGHT})})]})})})}function Me(e,t){return e.getBoolValue(t)}function _e(e){return e.default??null}function Ie(e){return e.value??null}function ze(e,t,o,r){t.setBoolValue(e,o.value,{fromUi:o.fromUi},r)}const We=g.memo(Be);export{We as default};
