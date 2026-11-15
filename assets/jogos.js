/* Lista única de jogos e simulações do PNGG LABZ.
   Todas as versões do site leem daqui — para adicionar um jogo novo, só acrescente um item. */
(function () {
  var T = {}; // miniaturas em SVG (viewBox 120x80)

  T.pataforma =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#2b2140"/>' +
    '<path d="M28 0H96V18H84V30H70V22H52V34H40V18H28Z" fill="#59565e"/>' +
    '<path d="M0 0H18V30H30V44H44V56H120V80H0Z" fill="#3a2c52"/>' +
    '<path d="M18 0V30H30V44H44V56H120" fill="none" stroke="#78e39b" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M94 30H120V40H94Z" fill="#3a2c52" stroke="#78e39b" stroke-width="2"/>' +
    '<path d="M0 72H14V80" fill="none" stroke="#78e39b" stroke-width="2"/>' +
    '<text x="60" y="15" text-anchor="middle" font-family="Courier New,monospace" font-weight="bold" font-size="9" fill="#e8e8e8">Forest</text>' +
    '<rect x="57" y="48" width="4" height="5" fill="#f2c7b0"/><rect x="56" y="45" width="6" height="4" fill="#c84b5a"/>' +
    '<rect x="57" y="53" width="1.6" height="3" fill="#2a2a2a"/><rect x="59.6" y="53" width="1.6" height="3" fill="#2a2a2a"/>' +
    '<ellipse cx="96" cy="53" rx="5" ry="3.5" fill="#8fc8f0" stroke="#d9f0ff" stroke-width="0.8"/>' +
    '<circle cx="94.5" cy="52.5" r="0.8" fill="#1d2a40"/><circle cx="97.5" cy="52.5" r="0.8" fill="#1d2a40"/>' +
    '<g fill="#f6f2b8"><path d="M72 49l1 2 2 .4-1.6 1.2.5 2-1.9-1-1.9 1 .5-2-1.6-1.2 2-.4z"/><path d="M106 22l.8 1.6 1.6.3-1.2 1 .4 1.6-1.6-.8-1.6.8.4-1.6-1.2-1 1.6-.3z"/></g>' +
    '<rect x="3" y="3" width="22" height="3" fill="#5a0d14"/><rect x="3" y="3" width="17" height="3" fill="#e0323f"/>' +
    '<rect x="3" y="8" width="22" height="2.4" fill="#0d1a5a"/><rect x="3" y="8" width="13" height="2.4" fill="#3657e8"/>' +
    '</svg>';

  T['empire-builder'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#3a8fd0"/>' +
    '<rect x="8" y="6" width="104" height="68" fill="#ece9d8" stroke="#00138c" stroke-width="1.5"/>' +
    '<rect x="8" y="6" width="104" height="12" fill="#105ce6"/>' +
    '<text x="12" y="15" font-family="Tahoma" font-size="7" fill="#fff" font-weight="bold">Empire Builder</text>' +
    '<rect x="12" y="22" width="72" height="46" fill="#0d2b57"/>' +
    '<polygon points="20,35 28,30 36,35 36,43 28,48 20,43" fill="#3d8b4f"/>' +
    '<polygon points="36,43 44,38 52,43 52,51 44,56 36,51" fill="#2d6b3f"/>' +
    '<polygon points="52,35 60,30 68,35 68,43 60,48 52,43" fill="#c2b280"/>' +
    '<rect x="40" y="40" width="6" height="6" fill="#e8d5a8"/><circle cx="48" cy="32" r="2.5" fill="#1c62d6"/>' +
    '<rect x="88" y="22" width="20" height="46" fill="#dbe6f6" stroke="#7f9db9"/>' +
    '<rect x="90" y="26" width="16" height="5" fill="#1a6ef0"/><rect x="90" y="36" width="12" height="8" fill="#6ec06e"/>' +
    '</svg>';

  T['netops-admin'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#3a8cc9"/>' +
    '<rect x="8" y="6" width="104" height="68" fill="#c0c0c0" stroke="#000" stroke-width="1.2"/>' +
    '<rect x="8" y="6" width="104" height="12" fill="#000080"/>' +
    '<text x="12" y="15" font-family="Tahoma" font-size="6.5" fill="#fff" font-weight="bold">NetOps Admin \'98</text>' +
    '<rect x="12" y="22" width="44" height="46" fill="#fff" stroke="#808080"/>' +
    '<rect x="14" y="24" width="40" height="6" fill="#000080"/><rect x="14" y="32" width="40" height="5" fill="#e0e0e0"/>' +
    '<rect x="14" y="39" width="40" height="5" fill="#e0e0e0"/><rect x="14" y="46" width="40" height="5" fill="#c0ffc0"/>' +
    '<rect x="14" y="53" width="40" height="5" fill="#e0e0e0"/><rect x="60" y="22" width="48" height="32" fill="#000"/>' +
    '<text x="62" y="30" font-family="Consolas,monospace" font-size="4.5" fill="#0f0">[sys] online</text>' +
    '<text x="62" y="38" font-family="Consolas,monospace" font-size="4.5" fill="#0f0">&lt;p1&gt; lag???</text>' +
    '<text x="62" y="46" font-family="Consolas,monospace" font-size="4.5" fill="#ff0">&lt;admin&gt; ok</text>' +
    '<rect x="60" y="56" width="48" height="12" fill="#d4d0c8" stroke="#808080"/>' +
    '</svg>';

  T['art-market'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#d7d5cb"/>' +
    '<rect x="30" y="10" width="56" height="44" fill="#f4f2ec" stroke="#6d2a3a" stroke-width="1.5"/>' +
    '<rect x="34" y="14" width="48" height="36" fill="#fff"/>' +
    '<path d="M38 40 Q50 20 62 36 T80 30" fill="none" stroke="#6d2a3a" stroke-width="2.5"/>' +
    '<path d="M40 42 Q52 28 66 38" fill="none" stroke="#b28a2e" stroke-width="2"/>' +
    '<circle cx="48" cy="24" r="4" fill="#4b5d45" opacity="0.75"/>' +
    '<ellipse cx="96" cy="52" rx="13" ry="10" fill="#ece9e0" stroke="#c3c0b2"/>' +
    '<circle cx="92" cy="50" r="2.8" fill="#6d2a3a"/><circle cx="99" cy="49" r="2.8" fill="#b28a2e"/><circle cx="95" cy="56" r="2.8" fill="#4b5d45"/>' +
    '<rect x="30" y="60" width="56" height="9" rx="2" fill="#6d2a3a"/>' +
    '<text x="58" y="67" text-anchor="middle" font-family="Georgia,serif" font-size="6" fill="#f6ece9">avaliar</text>' +
    '</svg>';

  T['typing-test'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#0f0f23"/>' +
    '<rect x="8" y="6" width="104" height="68" fill="#1a1a3e" stroke="#00d4ff" stroke-width="1.5"/>' +
    '<rect x="8" y="6" width="104" height="12" fill="#7b2cbf"/>' +
    '<text x="12" y="15" font-family="Tahoma" font-size="7" fill="#fff" font-weight="bold">Typing Test</text>' +
    '<rect x="14" y="24" width="92" height="18" rx="2" fill="#0a0a1a" stroke="#00d4ff" stroke-width="0.8"/>' +
    '<text x="18" y="36" font-family="Consolas,monospace" font-size="5.5" fill="#00ff9d">A vida é feita de escolhas...</text>' +
    '<rect x="14" y="48" width="92" height="20" rx="2" fill="#000" stroke="#444"/>' +
    '<text x="18" y="61" font-family="Consolas,monospace" font-size="5" fill="#888">digite aqui...</text>' +
    '<text x="60" y="72" text-anchor="middle" font-family="Tahoma" font-size="5.5" fill="#00d4ff">WPM ★</text>' +
    '</svg>';

  T['nutcase-wizard'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<rect width="120" height="80" fill="#2a1c12"/>' +
    '<rect x="8" y="6" width="104" height="68" fill="#e6d3ac" stroke="#4a3527" stroke-width="1.5"/>' +
    '<rect x="8" y="6" width="104" height="12" fill="#7c4e2c"/>' +
    '<text x="12" y="15" font-family="Tahoma" font-size="6.5" fill="#f6e9cd" font-weight="bold">Nutcase Wizard</text>' +
    '<ellipse cx="48" cy="52" rx="22" ry="8" fill="#2f2d33"/>' +
    '<path d="M26 52 Q26 68 48 70 Q70 68 70 52" fill="#3a383f" stroke="#211f24" stroke-width="1.2"/>' +
    '<ellipse cx="48" cy="52" rx="22" ry="7" fill="#4a474f"/><ellipse cx="48" cy="50" rx="16" ry="5" fill="#5fbf6a"/>' +
    '<path d="M36 68 Q40 60 44 68 Q48 58 52 68 Q56 61 60 68" fill="#ef7a34" opacity="0.9"/>' +
    '<path d="M86 28 L86 42 L78 58 Q76 64 84 64 L96 64 Q104 64 102 58 L94 42 L94 28 Z" fill="#eef6f0" stroke="#33241c" stroke-width="1.2"/>' +
    '<path d="M78 52 L102 52 L102 58 Q102 64 96 64 L84 64 Q76 64 78 58 Z" fill="#a97bea"/>' +
    '<rect x="88" y="24" width="8" height="5" rx="1" fill="#8a5a35" stroke="#33241c" stroke-width="0.8"/>' +
    '<circle cx="30" cy="34" r="3" fill="#5a9a48"/><circle cx="72" cy="33" r="3" fill="#c0503a"/>' +
    '</svg>';

  T['gambit-monsters'] = (function () {
    var sq = '';
    for (var r = 0; r < 8; r++) for (var c = 0; c < 8; c++)
      if ((r + c) % 2 === 0) sq += '<rect x="' + (14 + c * 5) + '" y="' + (24 + r * 5) + '" width="5" height="5" fill="#2b2029"/>';
    return '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
      '<rect width="120" height="80" fill="#141026"/>' +
      '<rect x="8" y="6" width="104" height="68" fill="#1d1733" stroke="#6a5a92" stroke-width="1.5"/>' +
      '<rect x="8" y="6" width="104" height="12" fill="#3a2f52"/>' +
      '<text x="12" y="15" font-family="Tahoma" font-size="6.5" fill="#f0d048" font-weight="bold">Gambit Monsters</text>' +
      '<rect x="14" y="24" width="40" height="40" fill="#c8c0a8" stroke="#2b2029" stroke-width="1"/>' + sq +
      '<circle cx="26" cy="36" r="3" fill="#e8d6b6" stroke="#2b2029" stroke-width="0.8"/>' +
      '<circle cx="41" cy="51" r="3" fill="#514c6e" stroke="#120f19" stroke-width="0.8"/>' +
      '<path d="M70 28 L84 46 M84 28 L70 46" stroke="#f0b840" stroke-width="3" stroke-linecap="round"/>' +
      '<text x="90" y="40" font-family="Tahoma" font-size="9" font-weight="bold" fill="#f8f4e4">VS</text>' +
      '<text x="62" y="60" font-family="Tahoma" font-size="5.5" fill="#a89cc8">capturou? luta!</text>' +
      '</svg>';
  })();

  T['evolution-lab'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<defs><linearGradient id="evg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8ecff"/><stop offset="1" stop-color="#5aaa7a"/></linearGradient></defs>' +
    '<rect width="120" height="80" fill="url(#evg)"/>' +
    '<ellipse cx="30" cy="72" rx="45" ry="14" fill="#6dcf8a" opacity="0.85"/><ellipse cx="95" cy="74" rx="40" ry="12" fill="#5bbb7a" opacity="0.8"/>' +
    '<ellipse cx="28" cy="48" rx="10" ry="7" fill="#7dcf9a" stroke="#fff" stroke-width="1"/><circle cx="32" cy="46" r="2.3" fill="#fff"/><circle cx="32.6" cy="46" r="1.1" fill="#0a3a55"/>' +
    '<ellipse cx="62" cy="56" rx="8" ry="6" fill="#5ec4f0" stroke="#fff" stroke-width="1"/><circle cx="66" cy="54" r="2" fill="#fff"/><circle cx="66.5" cy="54" r="1" fill="#0a3a55"/>' +
    '<ellipse cx="92" cy="44" rx="9" ry="7" fill="#a0e0c0" stroke="#fff" stroke-width="1"/><circle cx="96" cy="42" r="2.3" fill="#fff"/><circle cx="96.6" cy="42" r="1.1" fill="#0a3a55"/>' +
    '<circle cx="45" cy="62" r="1.8" fill="#ffe566"/><circle cx="78" cy="66" r="1.5" fill="#ffe566"/>' +
    '</svg>';

  T['function-lab'] =
    '<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">' +
    '<defs><linearGradient id="fng" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eaf7ff"/><stop offset="1" stop-color="#8fd0f0"/></linearGradient></defs>' +
    '<rect width="120" height="80" fill="url(#fng)"/>' +
    '<rect x="8" y="8" width="104" height="64" rx="6" fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.8)"/>' +
    '<line x1="12" y1="40" x2="108" y2="40" stroke="rgba(10,58,85,0.2)"/><line x1="60" y1="12" x2="60" y2="68" stroke="rgba(10,58,85,0.2)"/>' +
    '<path d="M14 60 Q34 18 52 46 T90 30 T106 50" fill="none" stroke="#f0a050" stroke-width="1.5" stroke-dasharray="3 2.5"/>' +
    '<path d="M14 56 Q36 22 54 42 T92 32 T106 46" fill="none" stroke="#2a9fd4" stroke-width="2.2" stroke-linecap="round"/>' +
    '<circle cx="40" cy="31" r="3" fill="#5ec4f0" stroke="#fff"/><circle cx="60" cy="41" r="3" fill="#2a9fd4" stroke="#fff"/><circle cx="86" cy="31" r="3" fill="#5ec4f0" stroke="#fff"/>' +
    '</svg>';

  window.PNGG_JOGOS = [
    { id: 'pataforma', nome: 'Pataforma', tipo: 'jogo', beta: true, destaque: true,
      desc: 'Uma pata, umas plataformas e uma floresta roxa. Pula. Cai. Pula de novo. Feito na Godot.' },
    { id: 'empire-builder', nome: 'Empire Builder', tipo: 'jogo',
      desc: 'Construa um império em hexágonos dentro de uma janela do Windows XP. Napoleão aprovaria. Talvez.' },
    { id: 'netops-admin', nome: "NetOps Admin '98", tipo: 'jogo',
      desc: 'Você é o admin de rede de 1998. Todo mundo reclama de lag. Você reinicia o servidor. Repete.' },
    { id: 'gambit-monsters', nome: 'Gambit Monsters', tipo: 'jogo',
      desc: 'Xadrez, só que capturar uma peça começa uma luta de monstros. Simples assim.' },
    { id: 'nutcase-wizard', nome: 'Nutcase Wizard', tipo: 'jogo',
      desc: 'Oficina de poções duvidosas. Mistura erva, cogumelo e fé. Resultado não garantido.' },
    { id: 'art-market', nome: 'Art Market', tipo: 'jogo',
      desc: 'Avalie obras de arte e finja que entende do mercado. Ninguém entende.' },
    { id: 'typing-test', nome: 'Typing Speed Test', tipo: 'jogo',
      desc: 'Digite rápido. Mais rápido. Seus dedos agradecem (não agradecem).' },
    { id: 'evolution-lab', nome: 'Evolution Lab', tipo: 'sim',
      desc: 'Criaturinhas com rede neural evoluem e formam espécies em tempo real. Darwin chorou.' },
    { id: 'function-lab', nome: 'Lab de Funções', tipo: 'sim',
      desc: 'Digite, desenhe e desafie funções. Modos Livre, Desafio, Estudos e Battle.' }
  ];

  window.PNGG_JOGOS.forEach(function (j) {
    j.href = j.id + '/index.html';
    j.thumb = T[j.id] || '';
    j.sigla = j.beta ? 'BETA' : (j.tipo === 'sim' ? 'SIM' : 'JOGO');
  });

  /* Programação "de TV": cada dia da semana tem uma grade diferente de jogos. */
  window.PNGG_PROGRAMACAO = function (dia) {
    var horas = ['23:00', '23:30', '00:00', '00:15', '00:30', '01:00', '01:30'];
    var lista = window.PNGG_JOGOS.slice();
    var seed = dia * 7 + 3;
    for (var i = lista.length - 1; i > 0; i--) {
      seed = (seed * 9301 + 49297) % 233280;
      var k = Math.floor(seed / 233280 * (i + 1));
      var t = lista[i]; lista[i] = lista[k]; lista[k] = t;
    }
    return horas.map(function (h, i) { return { hora: h, jogo: lista[i] }; });
  };

  /* Contador de visitas falso (guardado só no navegador de quem visita). */
  window.PNGG_VISITAS = function () {
    var n = 1337;
    try {
      n = (parseInt(localStorage.getItem('pngg-hits'), 10) || 1337) + 1;
      localStorage.setItem('pngg-hits', String(n));
    } catch (e) {}
    return String(n).padStart(7, '0');
  };

  /* Contagem regressiva do anúncio de GTA VI (lançamento 19/11/2026). */
  window.PNGG_CONTAGEM = function () {
    var alvo = new Date('2026-11-19T00:00:00-03:00').getTime();
    var d = alvo - Date.now();
    if (d <= 0) return 'JÁ SAIU. VAI JOGAR.';
    var dias = Math.floor(d / 864e5), h = Math.floor(d / 36e5) % 24, m = Math.floor(d / 6e4) % 60, s = Math.floor(d / 1e3) % 60;
    return dias + 'd ' + String(h).padStart(2, '0') + 'h ' + String(m).padStart(2, '0') + 'm ' + String(s).padStart(2, '0') + 's';
  };
})();
