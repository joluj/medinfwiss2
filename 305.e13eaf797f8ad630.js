"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[305],{8743:(C,_,r)=>{function m(c){return!(!c.name||!c.value)}function h(c){const d=[];for(const[p,t]of Object.entries(c))d.push("number"==typeof t?{name:p,value:t}:{name:p,children:h(t)});return d}r.d(_,{RG:()=>h,W_:()=>n,y5:()=>m});const n={CYP1A2:{Fluorchinolone:{Ciprofloxacin:3,Ofloxacin:1,Levofloxacin:1},Diverse:{Amiodaron:1,Cimetidin:2,Fluvoxamin:3,Ticlopidin:1},Tabakrauch:-1,Omeprazol:-1},CYP2C9:{Amiodaron:2,Fluconazol:3,Isoniazid:1,Rifampicin:-1},CYP2C19:{SSRI:{Fluoxetin:1,Fluvoxamin:1},PPI:{Lansoprazol:2,Omeprazol:2},Diverse:{Ketoconazol:1,Ticlopidin:1}},CYP2D6:{SSRI:{Duloxetin:2,Fluoxetin:3,Paroxetin:3},Diverse:{Amiodaron:1,Buproprion:1,Cimetidin:1,Chinidin:3,Chlorpheniramin:1,Clomipramin:1,Ritonavir:1}},"CYP3A4/5":{"HIV-Protease-Inhibitoren":{Indinavir:3,Nelfinavir:3,Ritonavir:3},Makrolide:{Clarithromycin:3,Erythromycin:2},"Azol-Antimykotika":{Fluconazol:1,Itraconazol:1,Ketoconazol:3,Voriconazol:1},Diverse:{Aprepitant:2,Amiodaron:1,Cimetidin:2,Diltiazem:1,"Naringin (in Zitrusfruechten)":2,Verapamil:2},"Carbamazepin (weniger Oxcarbazepin)":-1,Efavirenz:-1,"Hyperforin (in Johanniskraut)":-1,Phenobarbital:-1,Phenytoin:-1,Rifampicin:-1}}},305:(C,_,r)=>{r.r(_),r.d(_,{InteraktionenComponent:()=>s,default:()=>u});var m=r(6895),h=r(4396),n=r(4650);function c(i,e){1&i&&n.GkF(0)}const d=function(i){return{$implicit:i}};function p(i,e){if(1&i&&(n.ynx(0),n.YNc(1,c,1,0,"ng-container",2),n.BQk()),2&i){const f=e.$implicit;n.oxw();const v=n.MAs(18);n.xp6(1),n.Q6J("ngTemplateOutlet",v)("ngTemplateOutletContext",n.VKq(2,d,f))}}function t(i,e){if(1&i&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&i){const f=n.oxw().$implicit;n.xp6(1),n.hij(" (",f.value,") ")}}function a(i,e){1&i&&n.GkF(0)}function o(i,e){if(1&i&&(n.TgZ(0,"li"),n.YNc(1,a,1,0,"ng-container",2),n.qZA()),2&i){const f=e.$implicit;n.oxw(2);const v=n.MAs(18);n.xp6(1),n.Q6J("ngTemplateOutlet",v)("ngTemplateOutletContext",n.VKq(2,d,f))}}function l(i,e){if(1&i&&(n.TgZ(0,"li"),n._uU(1),n.YNc(2,t,2,1,"span",3),n.TgZ(3,"ul"),n.YNc(4,o,2,4,"li",0),n.qZA()()),2&i){const f=e.$implicit;n.xp6(1),n.hij(" ",f.name," "),n.xp6(1),n.Q6J("ngIf",f.value),n.xp6(2),n.Q6J("ngForOf",f.children)}}class s{constructor(e){this.dataService=e,this.interaktionen$=this.dataService.interaktionen$}}s.\u0275fac=function(e){return new(e||s)(n.Y36(h.D))},s.\u0275cmp=n.Xpm({type:s,selectors:[["medinfwiss2-interaktionen"]],standalone:!0,features:[n.jDz],decls:19,vars:3,consts:[[4,"ngFor","ngForOf"],["withChildren",""],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"]],template:function(e,f){1&e&&(n.TgZ(0,"h1"),n._uU(1,"Interaktionen"),n.qZA(),n.TgZ(2,"div")(3,"p"),n._uU(4," Nach Tabelle 4 (modifiziert): Positive Zahlen beschreiben Inhibitoren, negative Zahlen Induktoren. "),n.qZA(),n.TgZ(5,"p"),n._uU(6," 3: ausgepr\xe4gte Hemmung;"),n._UZ(7,"br"),n._uU(8," 2: mittlere Hemmung;"),n._UZ(9,"br"),n._uU(10," 1: schwache oder nicht definierte Hemmung;"),n._UZ(11,"br"),n._uU(12," -1: undefinierte Induktion "),n.qZA(),n._UZ(13,"br"),n.qZA(),n.TgZ(14,"ul"),n.YNc(15,p,2,4,"ng-container",0),n.ALo(16,"async"),n.qZA(),n.YNc(17,l,5,3,"ng-template",null,1,n.W1O)),2&e&&(n.xp6(15),n.Q6J("ngForOf",n.lcZ(16,1,f.interaktionen$)))},dependencies:[m.ez,m.sg,m.O5,m.tP,m.Ov]});const u=s},4396:(C,_,r)=>{r.d(_,{D:()=>a});var m=r(9646),h=r(4004),n=r(3151);function c(o){return Object.entries(o).reduce((l,[s,u])=>{const i=u.map(e=>"string"==typeof e?{name:e,isProDrug:e.endsWith("*")}:c(e)).flat();return l.concat({name:s,children:i})},[])}const d={CYP1A2:["Clozapin","Imipramin","Mexiletin","Naproxen","Tacrin","Theophyllin"],CYP2C9:[{NSAID:["Celecoxib","Diclofenac","Ibuprofen","Naproxen","Piroxicam"]},{Antidiabetika:["Glipizid","Tolbutamid"]},{"Angiotensin-Rezeptor-Blocker":["Irbesartan","Lorsartan"]},{Diverse:["Cyclophosphamid","Fluvastatin","Phenytoin","Sulfamethoxazol","Torasemid","Warfarin"]}],CYP2C19:[{"Protonenpumpen-Hemmer":["Omeprazol","Lansoprazol"]},{Diverse:["Amitriptylin","Clomipramin","Clopidogrel*","Cyclophosphamid*","Diazepam","Phenytoin"]}],CYP2D6:[{Betablocker:["Metoprolol","Propafenon","Timolol"]},{Antidepressiva:["Amitriptylin","Clomipramin","Desipramin","Duloxetin","Imipramin","Paroxetin","Venlafaxin"]},{Antipsychotika:["Aripiprazol","Haloperidol","Risperidon","Thioridazin"]},{Opioide:["Codein*","Dextromethorphan","Tramadol*"],Diverse:["Ondansetron","Tamoxifen*"]}],"CYP3A4/5":[{"Makrolid-Antibiotika":["Clarithromycin","Erythromycin"]},{Benzodiazepine:["Alprazolam","Diazepam","Midazolam","Triazolam"]},{Kalziumkanalblocker:["Amlodipin","Diltiazem","Felodipin","Nifedipin","Nisoldipin","Nitrendipin","Verapamil"]},{Immunsuppressiva:["Ciclosporin","Tacrolimus","Sirolimus"]},{"HIV-Protease-Inhibitoren":["Indinavir","Ritonavir","Saquinavir"]},{Statine:["Atorvastatin","Lovastatin","Simvastatin"]},{Gerinnungshemmer:["Apixaban","Rivaroxaban","Phenprocoumon"]},{Diverse:["Aripiprazol","Buspiron","Chinidin","Chinin","Ethinylestradiol","Imatinib","Sildenafil","Tamoxifen","Vincristin"]}]};var p=r(8743),t=r(4650);class a{constructor(){this.substrate$=(0,m.of)(d).pipe((0,h.U)(l=>c(l)),(0,n.d)(1)),this.interaktionen$=(0,m.of)(p.W_).pipe((0,h.U)(p.RG))}}a.\u0275fac=function(l){return new(l||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})},3151:(C,_,r)=>{r.d(_,{d:()=>d});var m=r(7579),h=r(6063);class n extends m.x{constructor(t=1/0,a=1/0,o=h.l){super(),this._bufferSize=t,this._windowTime=a,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=a===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,a)}next(t){const{isStopped:a,_buffer:o,_infiniteTimeWindow:l,_timestampProvider:s,_windowTime:u}=this;a||(o.push(t),!l&&o.push(s.now()+u)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const a=this._innerSubscribe(t),{_infiniteTimeWindow:o,_buffer:l}=this,s=l.slice();for(let u=0;u<s.length&&!t.closed;u+=o?1:2)t.next(s[u]);return this._checkFinalizedStatuses(t),a}_trimBuffer(){const{_bufferSize:t,_timestampProvider:a,_buffer:o,_infiniteTimeWindow:l}=this,s=(l?1:2)*t;if(t<1/0&&s<o.length&&o.splice(0,o.length-s),!l){const u=a.now();let i=0;for(let e=1;e<o.length&&o[e]<=u;e+=2)i=e;i&&o.splice(0,i+1)}}}var c=r(3099);function d(p,t,a){let o,l=!1;return p&&"object"==typeof p?({bufferSize:o=1/0,windowTime:t=1/0,refCount:l=!1,scheduler:a}=p):o=p??1/0,(0,c.B)({connector:()=>new n(o,t,a),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:l})}}}]);