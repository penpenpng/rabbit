import{i as m,t as y,j as _,a as r,h as b,F,d as E,r as h,c as g,u as T,n as x,b as C,ag as p,x as L,y as O,v as R}from"./index-CbXZld-o.js";import{d as q}from"./EventDisplay-B_C4ZLJn.js";import{n as k,s as Q,v as I,r as K,B as $}from"./SideBar-QP03rlVs.js";const S=y('<div class="block shrink-0 overflow-hidden border-b border-border p-1">'),w=t=>(()=>{const s=S();return m(s,()=>t.children),s})(),H=t=>{const{shouldMuteEvent:s}=_();return r(F,{get each(){return t.events},children:e=>r(b,{get when(){return!s(e)},get children(){return r(w,{get children(){return r(q,{event:e})}})}})})},U=y("<div class=none>"),j=y('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary"><span>'),P=y('<button class="flex h-12 w-full flex-col items-center justify-center hover:text-fg-secondary disabled:text-fg-secondary/30"><span>'),J=t=>{const s=h(t),e=i=>{const{duration:v}=s();if(v!=null)return i-v},[n,o]=g([]),[u,l]=g(e(k())),[a,c]=g(),[d,f]=g();return{setEvents:o,since:u,until:a,continuous:()=>a()==null,loadLatest:()=>{p(()=>{c(void 0),l(e(k()))}),d()?.scrollIntoView()},loadOld:()=>{const i=Q(n());i!=null&&(p(()=>{c(i.created_at),l(e(i.created_at))}),d()?.scrollIntoView())},setTopMarkerRef:f}},N=t=>{const s=T();return[r(b,{get when(){return!t.loadMore.continuous()},get children(){return[(()=>{const e=U(),n=t.loadMore.setTopMarkerRef;return typeof n=="function"?x(n,e):t.loadMore.setTopMarkerRef=e,e})(),r(w,{get children(){const e=j(),n=e.firstChild;return e.$$click=()=>t.loadMore.loadLatest(),m(n,()=>s.t("column.loadLatest")),e}})]}}),h(()=>t.children),r(w,{get children(){const e=P(),n=e.firstChild;return e.$$click=()=>t.loadMore.loadOld(),m(n,()=>s.t("column.loadOld")),C(()=>e.disabled=!t.eose),e}})]};E(["click"]);const B=t=>["useFollowings",t],M=t=>{const s=()=>{const n=t();if(n==null)return[];const o=[];return R(n).pTags().forEach(l=>{const[,a,c,d]=l,f={pubkey:a,petname:d};c!=null&&c.length>0&&(f.mainRelayUrl=c),o.push(f)}),o};return{followings:s,followingPubkeys:()=>s().map(n=>n.pubkey),data:t}},X=async({pubkey:t},s)=>{const e=new $({type:"Followings",pubkey:t});K({task:e,signal:s});const n=await e.latestEventPromise();return M(()=>n)},Y=t=>{const s=L(),e=h(t),n=h(()=>B(e())),o=O(()=>({queryKey:n(),queryFn:I({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:a}=l;return new $({type:"Followings",pubkey:a})},queryClient:s}),staleTime:5*60*1e3,gcTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0})),u=()=>s.invalidateQueries({queryKey:n()});return{...M(()=>o.data),invalidateFollowings:u,query:o}};export{w as C,N as L,H as T,J as a,X as f,B as q,Y as u};
//# sourceMappingURL=useFollowings-Cn7byUmF.js.map
