import{r as l,y,a as f,b as p}from"./assets/main-CIolC9zN.js";import"./assets/vendor-v1Cmh7Ux.js";const n=document.querySelector(".favorites"),g=document.querySelector(".pagination"),c=screen.width>767?10:8;let o=1;async function d(e,s=1){const a=window.innerWidth>=1440;let t;if(a){const i=e.length;t=e.slice(0,i)}else{const r=(s-1)*c,i=r+c;t=e.slice(r,i)}if(!t.length){n.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>";return}try{const r=await y.getExercisesByIdList(t);f(n,r)}finally{p(n)}}function u(e){const s=Math.ceil(e.length/c);let a="";for(let t=1;t<=s;t++)a+=`
            <button class="pagination-button ${t===o?"active":""}" data-page="${t}">
                ${t}
            </button>
        `;g.innerHTML=a,document.querySelectorAll(".pagination-button").forEach(t=>{t.addEventListener("click",()=>{o=Number(t.dataset.page),d(e,o),u(e)})})}function h(e){d(e,o),u(e)}const x=document.querySelector(".favorites");if(x){const e=JSON.parse(localStorage.getItem("favorites"));e&&Array.isArray(e)?(l(n),h(e)):n.innerHTML="<p class='no-favorites'>It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>"}
//# sourceMappingURL=favorites.js.map