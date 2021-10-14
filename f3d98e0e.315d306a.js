(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(8),o=(a(0),a(110)),i={id:"concepts",title:"Terminology and Concepts",sidebar_label:"Terminology and Concepts"},s={unversionedId:"notes/concepts",id:"notes/concepts",isDocsHomePage:!1,title:"Terminology and Concepts",description:"To develop on top of MMF, it is necessary to understand concepts and terminology used in MMF codebase. MMF has been very carefully designed from ground-up to be a multi-tasking framework. This means using MMF you can train on multiple datasets/datasets together.",source:"@site/docs/notes/concepts.md",slug:"/notes/concepts",permalink:"/docs/notes/concepts",editUrl:"https://github.com/facebookresearch/mmf/edit/main/website/docs/notes/concepts.md",version:"current",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1634179240,sidebar_label:"Terminology and Concepts",sidebar:"docs",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting_started/faqs"},next:{title:"MMF's Configuration System",permalink:"/docs/notes/configuration"}},c=[{value:"Datasets",id:"datasets",children:[]},{value:"Models",id:"models",children:[]},{value:"Registry",id:"registry",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Processors",id:"processors",children:[]},{value:"Sample List",id:"sample-list",children:[]}],l={toc:c};function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To develop on top of MMF, it is necessary to understand concepts and terminology used in MMF codebase. MMF has been very carefully designed from ground-up to be a multi-tasking framework. This means using MMF you can train on multiple datasets/datasets together."),Object(o.b)("p",null,"To achieve this, MMF has few opinions about architecture of your research project. But, being generic means MMF abstracts a lot of concepts in its modules and it would be easy to develop on top of MMF once a developer understands these simple concepts. Major concepts and terminology in MMF that one needs to know in order to develop over MMF are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#datasets"},"Datasets")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#models"},"Models")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#registry"},"Registry")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#configuration"},"Configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#processors"},"Processors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#sample-list"},"Sample List"))),Object(o.b)("h2",{id:"datasets"},"Datasets"),Object(o.b)("p",null,"You can find all the latest datasets ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/main/mmf/configs/datasets"},"here"),"."),Object(o.b)("p",null,"The dataset's key is available under the particular dataset's config, ie., for vizwiz's key, you can look in vizwiz's config available ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/main/mmf/configs/datasets/vizwiz/defaults.yaml"},"here")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"dataset_config:\n  vizwiz: # dataset key\n      data_dir: ${env.data_dir}/datasets\n      depth_first: false\n      fast_read: false\n      use_images: false\n      use_features: true\n      zoo_requirements:\n      - vizwiz.v2019\n      ...\n")),Object(o.b)("h2",{id:"models"},"Models"),Object(o.b)("p",null,"Reference implementations for state-of-the-art models have been included to act as a base for reproduction of research papers and starting point of new research. MMF has been used in past for following papers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/abs/1904.08920"},"Towards VQA Models That Can Read (LoRRA model)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://arxiv.org/abs/1807.09956"},"VQA 2018 Challenge winner")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://vizwiz.org/wp-content/uploads/2019/06/workshop2018_slides_FAIR_A-STAR.pdf"},"VizWiz 2018 Challenge winner")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookresearch/mmf/tree/main/projects/movie_mcan"},"VQA 2020 Challenge winner"))),Object(o.b)("p",null,"Similar to datasets, each model has been registered with a unique key for easy reference in configuration and command line arguments. For a more complete list of models, please see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/main/mmf/configs/models"},"here")),Object(o.b)("p",null,"The model's key is available under the particular model's config, ie., for mmf_transformer, the model's config file is available under ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/main/mmf/configs/models/mmf_transformer/defaults.yaml"},"here")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"model_config:\n  mmf_transformer: # model key\n    transformer_base: bert-base-uncased\n    training_head_type: classification\n    backend:\n      type: huggingface\n      freeze: false\n      params: {}\n    ...\n")),Object(o.b)("h2",{id:"registry"},"Registry"),Object(o.b)("p",null,"Registry acts as a central source of truth for MMF. Inspired from Redux's global store, useful information needed by MMF ecosystem is registered in the ",Object(o.b)("inlineCode",{parentName:"p"},"registry"),". Registry can be considered as a general purpose storage for information which is needed by multiple parts of the framework and acts source of information wherever that information is needed."),Object(o.b)("p",null,"Registry also registers models, tasks, datasets etc. based on a unique key as mentioned above. Registry's functions can be used as decorators over the classes which need to be registered (for e.g. models etc.)"),Object(o.b)("p",null,"Registry object can be imported as the follow:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"from mmf.common.registry import registry\n\n")),Object(o.b)("p",null,"Find more details about Registry class in its documentation ",Object(o.b)("a",{parentName:"p",href:"https://mmf.sh/api/lib/common/registry.html"},"common/registry"),"."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"As is necessary with research, most of the parameters/settings in MMF are configurable. MMF specific default values (",Object(o.b)("inlineCode",{parentName:"p"},"training"),") are present in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/blob/main/mmf/configs/defaults.yaml"},"mmf/configs/defaults.yaml")," with detailed comments delineating the usage of each parameter."),Object(o.b)("p",null,"For ease of usage and modularity, configuration for each dataset is kept separately in ",Object(o.b)("inlineCode",{parentName:"p"},"mmf/configs/datasets/[dataset]/[variants].yaml")," where you can get ",Object(o.b)("inlineCode",{parentName:"p"},"[dataset]")," value for the dataset from the tables in ",Object(o.b)("a",{parentName:"p",href:"#datasets"},"Datasets")," section."),Object(o.b)("p",null,"The most dynamic part, model configurations are also kept separate and are the ones which need to be defined by the user if they are creating their own models. We include configurations for the models included in the model zoo of MMF. You can find the model configurations ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/mmf/tree/main/mmf/configs/models"},"here")),Object(o.b)("p",null,"It is possible to include other configs into your config using ",Object(o.b)("inlineCode",{parentName:"p"},"includes")," directive. Thus, in MMF config above you can include ",Object(o.b)("inlineCode",{parentName:"p"},"lxmert"),"'s config like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"includes:\n- configs/models/lxmert/defaults.yaml\n")),Object(o.b)("p",null,"Now, due to separate config per dataset this concept can be extended to do multi-tasking and include multiple dataset configs here."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"defaults.yaml")," file mentioned above is always included and provides sane defaults for most of the training parameters. You can then specify the config of the model that you want to train using ",Object(o.b)("inlineCode",{parentName:"p"},"--config [config_path]")," option. The final config can be retrieved using ",Object(o.b)("inlineCode",{parentName:"p"},"registry.get('config')")," anywhere in your codebase. You can access the attributes from these configs by using ",Object(o.b)("inlineCode",{parentName:"p"},"dot")," notation. For e.g. if you want to get the value of maximum iterations, you can get that by ",Object(o.b)("inlineCode",{parentName:"p"},"registry.get('config').training.max_updates"),"."),Object(o.b)("p",null,"The values in the configuration can be overriden using two formats:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Individual Override: For e.g. you want to use ",Object(o.b)("inlineCode",{parentName:"li"},"DataParallel")," to train on multiple GPUs, you can override the default value of ",Object(o.b)("inlineCode",{parentName:"li"},"False")," by passing arguments ",Object(o.b)("inlineCode",{parentName:"li"},"training.data_parallel True")," at the end your command. This will override that option on the fly."),Object(o.b)("li",{parentName:"ul"},"DemJSON based override: The above option gets clunky when you are trying to run the hyperparameters sweeps over model parameters. To avoid this, you can update a whole block using a demjson string. For e.g. to use early stopping as well update the patience, you can pass ",Object(o.b)("inlineCode",{parentName:"li"},'--config_override "{training: {should_early_stop: True, patience: 5000}}"'),". This demjson string is easier to generate programmatically than the individual override. To use this feature, you will need to install ",Object(o.b)("inlineCode",{parentName:"li"},"demjson")," package.")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is always helpful to verify your config overrides and final configuration values that are printed to make sure you override the correct keys."))),Object(o.b)("h2",{id:"processors"},"Processors"),Object(o.b)("p",null,"The main aim of processors is to keep data processing pipelines as similar as possible for different datasets and allow code reusability. Processors take in a dict with keys corresponding to data they need and return back a dict with processed data. This helps keep processors independent of the rest of the logic by fixing the signatures they require. Processors are used in all of the datasets to hand off the data processing needs. Learn more about processors in the ",Object(o.b)("a",{parentName:"p",href:"https://mmf.sh/api/lib/datasets/processors.html"},"documentation for processors"),"."),Object(o.b)("h2",{id:"sample-list"},"Sample List"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://mmf.sh/api/lib/common/sample.html#mmf.common.sample.SampleList"},"SampleList")," has been inspired from BBoxList in maskrcnn-benchmark, but is more generic. All datasets integrated with MMF need to return a ",Object(o.b)("a",{parentName:"p",href:"https://mmf.sh/api/lib/common/sample.html#mmf.common.sample.Sample"},"Sample")," which will be collated into ",Object(o.b)("inlineCode",{parentName:"p"},"SampleList"),". Now, ",Object(o.b)("inlineCode",{parentName:"p"},"SampleList")," comes with a lot of handy functions which enable easy batching and access of things. For e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"Sample")," is a dict with some keys. In ",Object(o.b)("inlineCode",{parentName:"p"},"SampleList"),", values for these keys will be smartly clubbed based on whether it is a tensor or a list and assigned back to that dict. So, end user gets these keys clubbed nicely together and can use them in their model. Models integrated with MMF receive a ",Object(o.b)("inlineCode",{parentName:"p"},"SampleList")," as an argument which again makes the trainer unopinionated about the models as well as the datasets. Learn more about ",Object(o.b)("inlineCode",{parentName:"p"},"Sample")," and ",Object(o.b)("inlineCode",{parentName:"p"},"SampleList")," in their ",Object(o.b)("a",{parentName:"p",href:"https://mmf.sh/api/lib/common/sample.html"},"documentation"),"."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"SampleList is a dict that works as a collator"))))}m.isMDXComponent=!0},110:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),m=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(a),b=n,u=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);