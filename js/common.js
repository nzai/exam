function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getConfig(id, def) {
  const el = document.getElementById(id);
  if (!el) return def;
  const v = el.type === 'number' ? parseInt(el.value, 10) : el.value;
  return isNaN(v) ? def : v;
}

function showResult(containerId, correct, total, answers) {
  const panel = document.getElementById(containerId);
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  let grade = '❌ 继续加油';
  if (pct === 100) grade = '🏆 满分！太棒了！';
  else if (pct >= 90) grade = '⭐ 优秀！';
  else if (pct >= 70) grade = '👍 不错！';
  else if (pct >= 60) grade = '✅ 及格了';

  let html = `
    <div class="score">${correct} / ${total}</div>
    <div class="score-label">正确率 ${pct}% &middot; ${grade}</div>
  `;

  if (answers && answers.length) {
    const wrongs = answers.filter(a => !a.ok);
    if (wrongs.length > 0) {
      html += '<div class="detail" style="margin-top:1rem;text-align:left"><strong>错题回顾：</strong><br>';
      wrongs.forEach(w => {
        html += `<div style="margin-top:0.3rem">${w.q} &nbsp; 你的答案: <span style="color:#dc3545">${w.yours}</span> &nbsp; 正确答案: <span style="color:#28a745">${w.answer}</span></div>`;
      });
      html += '</div>';
    }
  }

  panel.innerHTML = html;
}
