import { _ as __nuxt_component_0$1 } from './nuxt-link-C1_egD5n.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, createBlock, openBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "aside" }, _attrs))} data-v-56fb2b21><h2 data-v-56fb2b21>COCKTAIL CATERING</h2><h1 data-v-56fb2b21>GASTROLI</h1><nav data-v-56fb2b21><ul data-v-56fb2b21><li data-v-56fb2b21>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`КЕЙСЫ`);
      } else {
        return [
          createTextVNode("КЕЙСЫ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-56fb2b21>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`УСЛУГИ`);
      } else {
        return [
          createTextVNode("УСЛУГИ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-56fb2b21>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`КОНТАКТЫ`);
      } else {
        return [
          createTextVNode("КОНТАКТЫ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></aside>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-56fb2b21"]]), { __name: "NavMenu" });
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "greeting" }, _attrs))} data-v-c4abcf6b><div class="greeting__content" data-v-c4abcf6b><div data-v-c4abcf6b><h2 data-v-c4abcf6b>COCKTAIL CATERING</h2><h1 data-v-c4abcf6b>GASTROLI</h1><h2 data-v-c4abcf6b>КОКТЕЙЛИ, КОТОРЫЕ ГОВОРЯТ ЗА НАС.</h2></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#",
    class: "greeting__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-c4abcf6b${_scopeId}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1" data-v-c4abcf6b${_scopeId}><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" data-v-c4abcf6b${_scopeId}></path></svg></span><span data-v-c4abcf6b${_scopeId}>Рассчитать<br data-v-c4abcf6b${_scopeId}>стоимость</span>`);
      } else {
        return [
          createVNode("span", null, [
            (openBlock(), createBlock("svg", {
              width: "24",
              height: "24",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "1"
            }, [
              createVNode("path", { d: "M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" })
            ]))
          ]),
          createVNode("span", null, [
            createTextVNode("Рассчитать"),
            createVNode("br"),
            createTextVNode("стоимость")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Greeting.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-c4abcf6b"]]), { __name: "Greeting" });
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "team" }, _attrs))} data-v-220a608c><div class="team__wrapper fade-in" data-v-220a608c><div class="team__content" data-v-220a608c><div style="${ssrRenderStyle({ "width": "350px", "height": "450px", "background-color": "red", "display": "flex", "flex-shrink": "0", "align-self": "center" })}" data-v-220a608c></div><div data-v-220a608c><h2 data-v-220a608c>GASTROLI TEAM</h2><p data-v-220a608c> Мы команда барменов, которая превращает любое событие в место со вкусом. <br data-v-220a608c> Без фейерверков и лишнего шума, просто правильный бар там, где его не было. </p><p data-v-220a608c> В нашем арсенале всё, что нужно: лёд, стекло, рецепты и чувство меры. </p><p data-v-220a608c> От классики до авторских коктейлей с ароматами трав, цитрусов и неожиданностей. <br data-v-220a608c> Вы оставляете заявку и мы уже в пути. </p><p data-v-220a608c> Соберём бар, встряхнём шейкеры и подадим напитки, которые запомнятся надолго. </p></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Team.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-220a608c"]]), { __name: "Team" });
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mobile-bar" }, _attrs))} data-v-7e7d5de4><div class="mobile-bar__wrapper fade-in" data-v-7e7d5de4><h2 data-v-7e7d5de4>ВЫЕЗДНОЙ БАР</h2><p data-v-7e7d5de4> Организуем выездной бар под ключ с вниманием к деталям и вашим пожеланиям. </p><p data-v-7e7d5de4> Мы привезём барную станцию, бокалы, лёд, посуду и всё необходимое оборудование. </p><p data-v-7e7d5de4> Команда барменов настроит работу, подберёт меню и создаст нужное настроение. </p></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileBar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-7e7d5de4"]]), { __name: "MobileBar" });
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "facts" }, _attrs))} data-v-29500784><div class="facts__wrapper fade-in" data-v-29500784><div class="facts__content" data-v-29500784><h2 data-v-29500784>НАСТОЯЩИЙ ВКУС ОПЫТА</h2><p data-v-29500784> За 10 лет мы организовали сотни мероприятий — от камерных ужинов до фестивалей на 3000+ гостей. <br data-v-29500784> Мы довели вкус коктейлей до тонкости, в которой слышно опыт, внимание и уважение к ремеслу. </p></div><div class="facts__content" data-v-29500784><h2 data-v-29500784>ГЛАВНЫЙ ФАКТ О НАС</h2><p data-v-29500784> Наши бартендеры умеют слушать и понимать без слов. Мы любим людей и умеем создавать вечера, в которых всё по-настоящему просто, живо и с душой. </p><p data-v-29500784> Каждый, кто приходит к нам, не клиент, а друг. Из таких встреч и рождается то, ради чего мы работаем атмосфера, в которой хочется остаться подольше. </p></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Facts.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-29500784"]]), { __name: "Facts" });
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "calculate" }, _attrs))} data-v-b01b94e3><div class="calculate__wrapper fade-in" data-v-b01b94e3><h2 data-v-b01b94e3>КАК СЧИТАЕМ</h2><div data-v-b01b94e3><p data-v-b01b94e3> Мы рассчитываем бюджет под каждое мероприятие индивидуально. <br data-v-b01b94e3> В базу входят: </p><ul data-v-b01b94e3><li data-v-b01b94e3>выезд и установка полностью укомплектованного бара</li><li data-v-b01b94e3>подборка авторских коктейлей</li><li data-v-b01b94e3>5-часовая смена барменов</li></ul></div><p data-v-b01b94e3> Финальную смету подготовим после обсуждения формата и деталей события. </p></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowToCalculate.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b01b94e3"]]), { __name: "HowToCalculate" });
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "contacts" }, _attrs))} data-v-92950a8f><div class="contacts__wrapper fade-in" data-v-92950a8f><h2 data-v-92950a8f> ВСТРЕТИМСЯ У БАРА </h2><address class="contacts__content" data-v-92950a8f><div class="contacts__phone" data-v-92950a8f><a href="+99800000000" type="tel" data-v-92950a8f>+ 998 00000000</a><a href="+99800000000" type="tel" data-v-92950a8f>+ 998 00000000</a></div><div class="contacts__street" data-v-92950a8f><p data-v-92950a8f>ТАШКЕНТ</p><p data-v-92950a8f>ШАХРИСАБЗ 33 А</p></div></address></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contacts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-92950a8f"]]), { __name: "Contacts" });
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "survive" }, _attrs))} data-v-872be881><div class="survive__wrapper fade-in" data-v-872be881><h2 data-v-872be881>GASTROLI</h2><div class="survive__img" data-v-872be881><p class="survive__text" data-v-872be881>survive the work week</p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Survive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-872be881"]]), { __name: "Survive" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavMenu = __nuxt_component_0;
  const _component_Greeting = __nuxt_component_1;
  const _component_Team = __nuxt_component_2;
  const _component_MobileBar = __nuxt_component_3;
  const _component_Facts = __nuxt_component_4;
  const _component_HowToCalculate = __nuxt_component_5;
  const _component_Contacts = __nuxt_component_6;
  const _component_Survive = __nuxt_component_7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavMenu, null, null, _parent));
  _push(`<main class="main">`);
  _push(ssrRenderComponent(_component_Greeting, null, null, _parent));
  _push(ssrRenderComponent(_component_Team, null, null, _parent));
  _push(ssrRenderComponent(_component_MobileBar, null, null, _parent));
  _push(ssrRenderComponent(_component_Facts, null, null, _parent));
  _push(ssrRenderComponent(_component_HowToCalculate, null, null, _parent));
  _push(ssrRenderComponent(_component_Contacts, null, null, _parent));
  _push(ssrRenderComponent(_component_Survive, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CwDyL0JA.mjs.map
