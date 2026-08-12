const photo={
 '멸치':'https://ecimg.cafe24img.com/pg298b50889312068/withtaste/web/product/extra/big/20230406/84b43dea366f887c14955c49d111830d.jpg',
 '붕장어':'https://commons.wikimedia.org/wiki/Special:FilePath/Conger%20myriaster.jpg?width=800',
 '먹장어':'https://commons.wikimedia.org/wiki/Special:FilePath/Eptatretus%20burgeri.jpg?width=800',
 '오징어':'https://commons.wikimedia.org/wiki/Special:FilePath/Todarodes%20pacificus.jpg?width=800',
 '도다리':'https://commons.wikimedia.org/wiki/Special:FilePath/Paralichthys%20olivaceus.jpg?width=800',
 '가자미':'https://commons.wikimedia.org/wiki/Special:FilePath/Paralichthys%20olivaceus.jpg?width=800',
 '볼락':'https://commons.wikimedia.org/wiki/Special:FilePath/Sebastes%20schlegelii.jpg?width=800',
 '전갱이':'https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20japonicus%20for%20sale%20in%20Tokyo%20area%20-%20Oct%207%202019.jpeg?width=800',
 '고등어':'https://m.luckyfull.com/web/product/big/201806/104_shop1_15293914933265.jpg',
 '갈치':'https://ojsfile.ohmynews.com/STD_IMG_FILE/2012/1024/IE001505500_STD.jpg',
 '숭어':'https://commons.wikimedia.org/wiki/Special:FilePath/Mugil%20cephalus.jpg?width=800',
 '전어':'https://commons.wikimedia.org/wiki/Special:FilePath/Konosirus%20punctatus.jpg?width=800',
 '농어':'https://commons.wikimedia.org/wiki/Special:FilePath/Lateolabrax%20japonicus.jpg?width=800'
};
const regionPhoto={
 '기장-멸치':'https://cdn.welfarehello.com/naver-blog/production/bskijang/2023-11/223266286568/bskijang_223266286568_5.jpg',
 '기장-붕장어':'https://padobox.kr/files/G0VOD2SQ4B/F5WH58XFL/image.png',
 '기장-먹장어':'https://cdn.011st.com/11dims/resize/396x396/quality/75/11src/pd/v2/7/9/9/5/1/0/HgbmU/7144799510_B.jpg',
 '기장-오징어':'https://ojsfile.ohmynews.com/STD_IMG_FILE/2025/0613/IE003481375_STD.jpg',
 '송정-도다리':'https://cdn-optimized.imweb.me/upload/S202104263584dd527ccd5/8cd92e618a8de.jpg?w=1920',
 '송정-가자미':'https://ecimg.cafe24img.com/pg740b33940025030/sb0629/web/product/big/20240326/a5b66179387b4188cac54df7ddba7ce9.jpg',
 '송정-볼락':'https://species.nibr.go.kr/UPLOAD/digital/GWPFile_per_BoardNo/9997/20181024012455476162.jpg',
 '송정-전갱이':'https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20japonicus%20for%20sale%20in%20Tokyo%20area%20-%20Oct%207%202019.jpeg?width=800',
 '영도-고등어':'https://aha-media.s3.ap-northeast-2.amazonaws.com/aha-qna/answers/qpizxru1nEoU8ebtSlW0V',
 '영도-전갱이':'https://commons.wikimedia.org/wiki/Special:FilePath/Trachurus%20japonicus%20for%20sale%20in%20Tokyo%20area%20-%20Oct%207%202019.jpeg?width=800',
 '영도-갈치':'https://cdn.theden.co.kr/news/photo/202408/2861_10824_3438.png',
 '영도-볼락':'https://blog.kakaocdn.net/dna/bwGSMX/btqFePrIc01/AAAAAAAAAAAAAAAAAAAAAIrGuNTuNlsUPLx_TNZdBRhr4KOJm9Uu9tNJoZ9CqxSn/img.jpg?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1769871599&signature=JQn05VP0AwPzLZnoaVK12wakUws%3D',
 '다대포-숭어':'https://images.agriharvest.tw/wp-content/uploads/2022/11/1125-1-1.jpg',
 '다대포-전어':'https://commons.wikimedia.org/wiki/Special:FilePath/Konosirus%20punctatus.jpg?width=800',
 '다대포-농어':'https://commons.wikimedia.org/wiki/Special:FilePath/Lateolabrax%20japonicus.jpg?width=800',
 '다대포-도다리':'https://image.ytn.co.kr/general/jpg/2016/0323/201603231800251282_img_1.jpg'
};
const seed=[
 ['기장','멸치',[3,4,5,6],9000,22,'멸치회 · 찌개 · 구이'],['기장','붕장어',[1,2,3,4,5,6,7,8,9,10,11,12],21000,18,'소금구이 · 장어탕 · 회'],['기장','먹장어',[6,7,8,9],18000,16,'소금구이 · 양념구이 · 매운탕'],['기장','오징어',[6,7,8,9,10,11],15000,20,'회 · 버터구이 · 물회'],
 ['송정','도다리',[2,3,4],19000,13,'쑥국 · 회 · 구이'],['송정','가자미',[10,11,12,1,2,3],16000,12,'구이 · 찜 · 조림'],['송정','볼락',[12,1,2,3,4],22000,9,'매운탕 · 구이 · 조림'],['송정','전갱이',[6,7,8,9,10],12000,23,'소금구이 · 회 · 조림'],
 ['영도','고등어',[9,10,11],14000,17,'고등어구이 · 조림 · 회'],['영도','전갱이',[6,7,8,9,10],12000,15,'소금구이 · 회 · 조림'],['영도','갈치',[8,9,10,11],26000,11,'갈치구이 · 조림 · 구이'],['영도','볼락',[12,1,2,3,4],22000,8,'매운탕 · 구이 · 조림'],
 ['다대포','숭어',[10,11,12,1,2],16000,19,'숭어회 · 매운탕 · 구이'],['다대포','전어',[8,9,10],15000,25,'전어회 · 구이 · 무침'],['다대포','농어',[5,6,7,8,9,10],28000,7,'농어회 · 소금구이 · 맑은탕'],['다대포','도다리',[2,3,4],19000,10,'쑥국 · 회 · 구이']
];
const fish=seed.map(([area,name,months,price,qty,recipes],i)=>({area,name,months,price,qty,recipes,emoji:['🐟','🐠','🦑'][i%3],time:`0${6+i%3}:2${i%6}`,image:regionPhoto[`${area}-${name}`]||photo[name]}));
let selectedMonth=new Date().getMonth()+1,rescued=0,found=[];
const $=s=>document.querySelector(s),available=()=>fish.filter(f=>f.months.includes(selectedMonth));
function go(id){document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'});if(id==='rescue')renderRescue();if(id==='my')renderMy();if(id==='draw')resetDraw()}
function setMonth(month){selectedMonth=Number(month);render();toast(`${selectedMonth}월 어획 분석 결과로 바뀌었어요.`)}
function image(f,cls=''){return `<img class="${cls}" src="${f.image}" alt="${f.area} ${f.name}" onerror="this.style.display='none';this.parentElement.classList.add('image-fallback')">`}
function render(){const current=available(),total=current.reduce((a,f)=>a+f.qty,0);$('#month-name').textContent=`${selectedMonth}월`;$('#total-count').textContent=total;$('#season-insight').innerHTML=`<b>${selectedMonth}월 분석:</b> 부산 4개 권역 중 <b>${[...new Set(current.map(f=>f.area))].length}곳</b>에서 <b>${current.length}종</b>의 제철 어종을 만날 수 있어요.`;const urgent=[...current].sort((a,b)=>b.qty-a.qty)[0];$('#urgent-card').innerHTML=urgent?`<div class="urgent-top"><span>🚨 바다 구조 요청!</span><span>${urgent.qty}마리 남음</span></div><b>${urgent.area} ${urgent.name}</b><p>이번 달 어획 가능한 수산물이에요.<br>오늘 안에 ${Math.max(0,urgent.qty-8)}마리가 더 팔리면 구조 성공!</p><div class="progress"><i style="width:${Math.min(100,(1-urgent.qty/31)*100)}%"></i></div><small>구조 진행 중</small>`:'<b>이번 달에는 등록된 어종이 없어요.</b>';$('#fish-list').innerHTML=current.map(f=>`<article class="fish" onclick="openFish(${fish.indexOf(f)})"><div class="fish-photo">${image(f)}</div><b>${f.area} ${f.name}</b><small>📍 ${f.area} · ${f.time} 어획</small><strong>${f.price.toLocaleString()}원</strong><em>● ${selectedMonth}월 어획 가능</em></article>`).join('')||'<p class="empty">이번 달 어획 데이터를 준비 중이에요.</p>';$('#season-calendar').innerHTML=fish.map(f=>`<div class="calendar-row"><b>${f.area} ${f.name}</b><span>${Array.from({length:12},(_,i)=>`<i class="${f.months.includes(i+1)?(i+1===selectedMonth?'now':'on'):''}">${i+1}</i>`).join('')}</span></div>`).join('');}
function resetDraw(){$('#draw-card').innerHTML='<div class="draw-wave">🌊</div><div class="mystery">?</div><p>버튼을 눌러 이번 달의 수산물을 만나보세요</p>'}
function weightedPick(){const current=available(),pool=current.flatMap(f=>Array(Math.max(1,f.qty)).fill(f));return pool[Math.floor(Math.random()*pool.length)]}
function drawFish(){if(!available().length){toast('이번 달 어획 가능 어종이 없어요.');return}const card=$('#draw-card');card.innerHTML='<div class="mystery">🎣</div><p>부산 바다에서 수산물을 찾는 중...</p>';setTimeout(()=>{const f=weightedPick();card.innerHTML=`<div class="draw-result">${image(f,'result-photo')}<div class="discount">${selectedMonth}월 제철 · 오늘만 18% 할인</div><h2>🎉 ${f.area} ${f.name} 당첨!</h2><p>📍 ${f.area} 앞바다 · 오늘 ${f.time} 어획<br>남은 수량 ${f.qty}마리</p><button class="primary" onclick="openFish(${fish.indexOf(f)})">이 물고기 데려가기</button></div>`},600)}
function openFish(i){const f=fish[i];$('#modal-content').innerHTML=`<div class="draw-result">${image(f,'result-photo')}<h2>${f.area} ${f.name}</h2><p>📍 ${f.area} 앞바다 · ${selectedMonth}월 어획 가능<br>남은 수량 <b>${f.qty}마리</b><br><br>추천 메뉴: ${f.recipes}</p><b class="discount">오늘만 18% 할인 · ${f.price.toLocaleString()}원</b><select id="cut"><option>통째로</option><option>내장 제거</option><option>구이용 손질</option><option>회용 손질</option></select><button class="primary" onclick="reserve(${i})">예약하기</button></div>`;$('#modal').classList.remove('hidden')}
function closeModal(){$('#modal').classList.add('hidden')}
function reserve(i){const f=fish[i];if(!f.qty)return toast('준비된 수량이 모두 예약되었어요.');f.qty--;rescued++;if(!found.includes(f.area+f.name))found.push(f.area+f.name);closeModal();render();toast(`${f.area} ${f.name} 예약 완료! 바다 구조에 참여했어요 🐟`)}
function renderRescue(){$('#rescue-list').innerHTML=[...available()].sort((a,b)=>b.qty-a.qty).map(f=>`<article class="rescue"><div class="rescue-head"><b>${f.emoji} ${f.area} ${f.name}</b><strong>${f.qty}마리 남음</strong></div><p>${selectedMonth}월 ${f.area} 앞바다 어획 가능 어종이에요.</p><div class="progress"><i style="width:${Math.min(100,(1-f.qty/31)*100)}%"></i></div><button onclick="openFish(${fish.indexOf(f)})">${f.name} 구조하러 가기</button></article>`).join('')||'<p class="empty">이번 달 구조 요청이 없어요.</p>'}
function renderMy(){$('#rescued-count').textContent=rescued;$('#found-count').textContent=found.length;$('#level').textContent=Math.max(1,Math.floor(rescued/3)+1);$('#collection').innerHTML=fish.map(f=>`<div class="${found.includes(f.area+f.name)?'found':''}">${f.emoji}<small>${found.includes(f.area+f.name)?f.name:'미발견'}</small></div>`).join('')}
function filterArea(area){const choices=available().filter(f=>f.area===area);$('#area-result').innerHTML=`<b>📍 ${area} 앞바다 · ${selectedMonth}월 분석</b><br>${choices.map(f=>`${f.emoji} ${f.name} · ${f.qty}마리 남음`).join('<br>')||`${selectedMonth}월에는 등록된 제철 어종이 없어요.`}`}
$('#seller-form').addEventListener('submit',e=>{e.preventDefault();const name=$('#new-name').value.trim(),area=$('#new-area').value,qty=Number($('#new-qty').value);fish.unshift({name,area,time:$('#new-time').value,price:Number($('#new-price').value),qty,emoji:'🐟',recipes:'구이 · 회 · 조림',image:photo[name]||'',months:[selectedMonth]});e.target.reset();go('home');render();toast(`${name} ${qty}마리가 ${selectedMonth}월 오늘의 바다에 등록됐어요!`)});
function render(){
 const current=available(),total=current.reduce((a,f)=>a+f.qty,0),areas=['기장','송정','영도','다대포'];
 $('#month-name').textContent=`${selectedMonth}월`;$('#total-count').textContent=total;
 $('#season-insight').innerHTML=`<b>${selectedMonth}월 분석:</b> 부산 4개 권역의 총 16개 등록 어종 중 <b>${current.length}종</b>이 이번 달 어획 가능해요.`;
 const urgent=[...current].sort((a,b)=>b.qty-a.qty)[0];
 $('#urgent-card').innerHTML=urgent?`<div class="urgent-top"><span>🚨 바다 구조 요청!</span><span>${urgent.qty}마리 남음</span></div><b>${urgent.area} ${urgent.name}</b><p>이번 달 어획 가능한 수산물이에요.<br>오늘 안에 ${Math.max(0,urgent.qty-8)}마리가 더 팔리면 구조 성공!</p><div class="progress"><i style="width:${Math.min(100,(1-urgent.qty/31)*100)}%"></i></div><small>구조 진행 중</small>`:'<b>이번 달에는 등록된 어종이 없어요.</b>';
 $('#fish-list').innerHTML=areas.map(area=>{const items=current.filter(f=>f.area===area);return `<section class="region-block"><div class="region-head"><h3>📍 ${area} 앞바다</h3><small>${items.length} / 4종 어획 가능</small></div><div class="region-fish-grid">${items.map(f=>`<article class="fish" onclick="openFish(${fish.indexOf(f)})"><div class="fish-photo">${image(f)}</div><b>${f.name}</b><small>${f.time} 어획 · ${f.qty}마리</small><strong>${f.price.toLocaleString()}원</strong><em>● ${selectedMonth}월 제철</em></article>`).join('')||'<p class="empty">이번 달 어획 가능 어종이 없어요.</p>'}</div></section>`}).join('');
 $('#season-calendar').innerHTML=fish.map(f=>`<div class="calendar-row"><b>${f.area} ${f.name}</b><span>${Array.from({length:12},(_,i)=>`<i class="${f.months.includes(i+1)?(i+1===selectedMonth?'now':'on'):''}">${i+1}</i>`).join('')}</span></div>`).join('');
}
$('#month-select').innerHTML=Array.from({length:12},(_,i)=>`<option value="${i+1}" ${i+1===selectedMonth?'selected':''}>${i+1}월</option>`).join('');render();renderMy();
