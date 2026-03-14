const allProjects = [
  { 
      id: 'civil1', major: 'civil', 
      title: 'Rainwater Harvesting System', 
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800', 
      intro: 'Rainwater Harvesting System သည် မိုးရေကို စုဆောင်းပြီး နောက်ပိုင်းတွင် အသုံးပြုနိုင်စေရန် သိုလှောင်ထားသော စနစ်ဖြစ်သည်။ Civil Engineering တွင် sustainable water management အတွက် အရေးပါသော နည်းပညာတစ်ခု ဖြစ်သည်။', 
      aim: '• မိုးရေကို စုဆောင်းသိုလှောင်ပြီး အသုံးပြုနိုင်သော စနစ်တစ်ခု တည်ဆောက်ရန်။\n• ရေအရင်းအမြစ်ကို ချွေတာအသုံးပြုရန်။\n• မြေအောက်ရေ အသုံးပြုမှုကို လျှော့ချရန်။', 
      theory: 'Hydrology theory အပေါ် အခြေခံထားသည်။ မိုးရေသည် catchment area များပေါ်တွင် ကျရောက်ပြီး runoff အဖြစ် စီးဆင်းလာသည်။ ထို runoff ကို filtration system ဖြင့် သန့်စင်ပြီး သိုလှောင်နိုင်သည်။', 
      process: ['Roof catchment မှ မိုးရေကို စုဆောင်းခြင်း', 'Pipe နှင့် gutter များမှတစ်ဆင့် ရေကို ပို့ဆောင်ခြင်း', 'Filter ဖြင့် အညစ်အကြေးများ ဖယ်ရှားခြင်း', 'Storage tank တွင် ရေသိုလှောင်ခြင်း'], 
      con: 'ရေအရင်းအမြစ်ကို ထိရောက်စွာ စီမံခန့်ခွဲနိုင်ပြီး ရေရှားပါးမှုကို လျှော့ချပေးနိုင်သော နည်းပညာတစ်ခု ဖြစ်သည်။' 
  },
  { 
      id: 'ec1', major: 'ec', 
      title: 'Automatic Street Light System', 
      img: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=800', 
      intro: 'နေ့ညအခြေအနေအပေါ် မူတည်၍ လမ်းမီးများကို အလိုအလျောက် ဖွင့်ပိတ်နိုင်သော စနစ်ဖြစ်သည်။ လျှပ်စစ်စွမ်းအင်ကို ချွေတာနိုင်ပြီး လူသား၏ လက်ဖြင့် ထိန်းချုပ်မှု မလိုအပ်ပါ။', 
      aim: '• လမ်းမီးများကို အလိုအလျောက် ဖွင့်ပိတ်ရန်။\n• လျှပ်စစ်စွမ်းအင်ကို ချွေတာရန်။\n• လမ်းပေါ်တွင် လုံခြုံရေး တိုးတက်စေရန်။', 
      theory: 'LDR (Light Dependent Resistor) sensor အပေါ် အခြေခံထားသည်။ အလင်းရောင်နည်းသည့်အချိန်တွင် resistance မြင့်လာပြီး circuit ကို activate လုပ်ကာ မီးဖွင့်ပေးသည်။', 
      process: ['LDR sensor မှ အလင်းရောင်ကို detect လုပ်ခြင်း', 'Signal ကို control circuit သို့ ပို့ခြင်း', 'Controller မှ relay ကို activate လုပ်ခြင်း', 'ညအချိန်တွင် light ဖွင့်ပြီး နေ့အချိန်တွင် ပိတ်ခြင်း'], 
      con: 'စွမ်းအင်ချွေတာနိုင်ပြီး smart city development အတွက် အထောက်အကူဖြစ်စေသော စနစ်တစ်ခု ဖြစ်သည်။' 
  },
  { 
      id: 'ep1', major: 'ep', 
      title: 'Solar Power Generation System', 
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800', 
      intro: 'နေရောင်ခြည်မှ လျှပ်စစ်စွမ်းအင် ထုတ်လုပ်သော renewable energy technology ဖြစ်သည်။ ပတ်ဝန်းကျင် ထိခိုက်မှု လျှော့ချရန် အရေးပါသော စနစ်ဖြစ်သည်။', 
      aim: '• နေရောင်ခြည်မှ လျှပ်စစ်ထုတ်လုပ်ရန်။\n• Renewable energy အသုံးပြုမှု တိုးတက်စေရန်။\n• ပတ်ဝန်းကျင် ထိခိုက်မှု လျှော့ချရန်။', 
      theory: 'Photovoltaic effect အပေါ် အခြေခံပြီး semiconductors များမှတစ်ဆင့် နေရောင်ခြည်ကို လျှပ်စစ်စွမ်းအင် (Electric Current) အဖြစ် ပြောင်းလဲပေးသည်။', 
      process: ['Solar panel မှ sunlight စုပ်ယူခြင်း', 'DC current ထုတ်လုပ်ခြင်း', 'Charge controller ဖြင့် battery charge လုပ်ခြင်း', 'Inverter ဖြင့် AC power ပြောင်းလဲခြင်း'], 
      con: 'Renewable energy technology တစ်ခုဖြစ်ပြီး လျှပ်စစ်ထုတ်လုပ်ရာတွင် ပတ်ဝန်းကျင်ကို ကာကွယ်ပေးနိုင်သည်။' 
  },
  { 
      id: 'mech1', major: 'mech', 
      title: 'Automatic Water Pump System', 
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800', 
      intro: 'Water level အပေါ် မူတည်၍ pump ကို အလိုအလျောက် ဖွင့်ပိတ်နိုင်သော စနစ်ဖြစ်သည်။ Water tank များတွင် ရေအဆင့်ကို ထိန်းချုပ်ရန် အသုံးပြုသည်။', 
      aim: '• ရေအဆင့်အပေါ် မူတည်၍ pump ကို အလိုအလျောက် ထိန်းချုပ်ရန်။\n• ရေမလွန်ကဲအောင် ထိန်းချုပ်ရန်။\n• Pump ပျက်စီးခြင်းမှ ကာကွယ်ရန်။', 
      theory: 'Float sensor သို့မဟုတ် level sensor များအပေါ် အခြေခံသည်။ ရေအဆင့် ပြောင်းလဲမှုကို sensor မှ သိရှိပြီး motor ကို ထိန်းချုပ်သည်။', 
      process: ['Sensor မှ ရေအဆင့်ကို detect လုပ်ခြင်း', 'Signal ကို controller သို့ ပို့ခြင်း', 'ရေနည်းလျှင် pump ဖွင့်ခြင်း', 'ရေပြည့်လျှင် pump ပိတ်ခြင်း'], 
      con: 'ရေအဆင့်ကို အလိုအလျောက် ထိန်းချုပ်နိုင်ပြီး ရေစီမံခန့်ခွဲမှုကို ပိုမို ထိရောက်စေသည်။' 
  },
  { 
      id: 'it1', major: 'it', 
      title: 'Student Management System', 
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800', 
      intro: 'ကျောင်းသားများ၏ အချက်အလက်များကို digital system ဖြင့် စီမံခန့်ခွဲနိုင်သော software system ဖြစ်သည်။ Manual record စနစ်များကို အစားထိုးရန် ဖြစ်သည်။', 
      aim: '• ကျောင်းသားဒေတာများကို စနစ်တကျ သိမ်းဆည်းရန်။\n• Data search နှင့် update လုပ်ရန် လွယ်ကူစေရန်။\n• အုပ်ချုပ်မှုပိုင်းကို မြန်ဆန်စေရန်။', 
      theory: 'Database management theory အပေါ် အခြေခံထားသည်။ Application software မှတစ်ဆင့် CRUD operations များ ပြုလုပ်နိုင်သည်။', 
      process: ['Student info ကို system ထဲသို့ ထည့်ခြင်း', 'Database တွင် data သိမ်းဆည်းခြင်း', 'Data search/update ပြုလုပ်ခြင်း', 'System မှ report များ ထုတ်ပေးခြင်း'], 
      con: 'Data management ကို လွယ်ကူစေပြီး ကျောင်း၏ administration process ကို ပိုမို ထိရောက်စေသည်။' 
  }
];

function displayGrid(data) {
  const grid = document.getElementById('projectGrid');
  if(!grid) return;
  grid.innerHTML = data.map(p => `
      <div class="card" onclick="location.href='detail.html?id=${p.id}'">
          <img src="${p.img}" alt="${p.title}">
          <div class="card-info">
              <span style="color:var(--neon); font-size:12px;">${p.major.toUpperCase()}</span>
              <h3>${p.title}</h3>
          </div>
      </div>
  `).join('');
}

function loadProjectDetails(id) {
  const p = allProjects.find(i => i.id === id);
  if (!p) return;
  document.getElementById('p-title').innerText = p.title;
  document.getElementById('p-major').innerText = p.major.toUpperCase();
  document.getElementById('p-intro').innerText = p.intro;
  document.getElementById('p-aim').innerText = p.aim;
  document.getElementById('p-theory').innerText = p.theory;
  document.getElementById('p-con').innerText = p.con;
  
  const list = document.getElementById('p-process');
  list.innerHTML = p.process.map(item => `<li>${item}</li>`).join('');
}

function filterSelection(m) {
  const filtered = m === 'all' ? allProjects : allProjects.filter(p => p.major === m);
  displayGrid(filtered);
  document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}


function loadProjectDetails(id) {
  const p = allProjects.find(item => item.id === id);
  if (!p) return;

  document.getElementById('p-title').innerText = p.title;
  document.getElementById('p-major').innerText = p.major.toUpperCase();
  document.getElementById('p-intro').innerText = p.intro;
  document.getElementById('p-aim').innerText = p.aim;
  document.getElementById('p-theory').innerText = p.theory;
  document.getElementById('p-con').innerText = p.con;
  
  // ပုံကို Load လုပ်ပေးမည့် အပိုင်း
  const imgElement = document.getElementById('p-img');
  if(imgElement) imgElement.src = p.img;

  const processList = document.getElementById('p-process');
  processList.innerHTML = p.process.map(step => `<li>${step}</li>`).join('');
}


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
      menuToggle.addEventListener('click', (e) => {
          e.stopPropagation(); // တခြားနေရာနှိပ်တာနဲ့ မရောအောင် တားခြင်း
          navLinks.classList.toggle('active');
      });
  }

  // Menu ပွင့်နေတုန်း တခြားနေရာနှိပ်ရင် ပြန်ပိတ်သွားအောင်လုပ်ခြင်း
  document.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
      }
  });
});
