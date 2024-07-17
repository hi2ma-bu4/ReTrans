const lang = {
	af: "アフリカーンス語",
	sq: "アルバニア語",
	am: "アムハラ語",
	ar: "アラブソン語",
	hy: "アルメニア語",
	as: "アッサム語",
	ay: "マイマラ語",
	az: "アゼルバイジャン語",
	bm: "バンバラ語",
	be: "ベラルーシ語",
	bn: "ベンガル語",
	bho: "ボージュプリー語",
	bs: "ボスニア語",
	bg: "ブルガリア語",
	ca: "カタロニア語",
	ceb: "セブ語",
	"zh-CN": "中国語（簡体）",
	"zh-TW": "中国語（繁体）",
	co: "コルシカ語",
	hr: "クロアチア語",
	cs: "チェコ語",
	da: "デンマーク語",
	dv: "ディベヒ語",
	doi: "ドグリ語",
	nl: "オランダ語",
	en: "英語",
	eo: "エスペラント語",
	et: "エストニア語",
	ee: "エウェ語",
	fil: "フィリピン語（タガログ語）",
	fi: "フィンランド語",
	fr: "フランス語",
	fy: "フリジア語",
	gl: "ガリシア語",
	ka: "グルジア語",
	de: "ドイツ語",
	el: "ギリシャ語",
	gn: "グアラニ語",
	gu: "グジャラート語",
	ht: "クレオール語（ハイチ）",
	ha: "ハウサ語",
	haw: "ハワイ語",
	he: "ヘブライ語",
	iw: "ヘブライ語",
	hi: "ヒンディー語",
	hmn: "モン語",
	hu: "ハンガリー語",
	is: "アイスランド語",
	ig: "イボ語",
	ilo: "イロカノ語",
	id: "インドネシア語",
	ga: "アイルランド語",
	it: "イタリア語",
	ja: "日本語",
	jv: "ジャワ語",
	jw: "ジャワ語",
	kn: "カンナダ文字",
	kk: "カザフ語",
	km: "クメール語",
	rw: "キニヤルワンダ語",
	gom: "コンカニ語",
	ko: "韓国語",
	kri: "クリオ語",
	ku: "クルド語",
	ckb: "クルド語（ソラニ語）",
	ky: "キルギス語",
	lo: "ラオ語",
	la: "ラテン語",
	lv: "ラトビア語",
	ln: "リンガラ語",
	lt: "リトアニア語",
	lg: "ルガンダ語",
	lb: "ルクセンブルク語",
	mk: "マケドニア語",
	mai: "マイティリー語",
	mg: "マラガシ語",
	ms: "マレー語",
	ml: "マラヤーラム文字",
	mt: "マルタ語",
	mi: "マオリ語",
	mr: "マラーティー語",
	"mni-Mtei": "メイテイ語（マニプリ語）",
	lus: "ミゾ語",
	mn: "モンゴル語",
	my: "ミャンマー語（ビルマ語）",
	ne: "ネパール語",
	no: "ノルウェー語",
	ny: "ニャンジャ語（チェワ語）",
	or: "オリヤ語",
	om: "オロモ語",
	ps: "パシュト語",
	fa: "ペルシャ語",
	pl: "ポーランド語",
	pt: "ポルトガル語（ポルトガル、ブラジル）",
	pa: "パンジャブ語",
	qu: "ケチュア語",
	ro: "ルーマニア語",
	ru: "ロシア語",
	sm: "サモア語",
	sa: "サンスクリット語",
	gd: "スコットランド ゲール語",
	nso: "セペディ語",
	sr: "セルビア語",
	st: "セソト語",
	sn: "ショナ語",
	sd: "シンド語",
	si: "シンハラ語",
	sk: "スロバキア語",
	sl: "スロベニア語",
	so: "ソマリ語",
	es: "スペイン語",
	su: "スンダ語",
	sw: "スワヒリ語",
	sv: "スウェーデン語",
	tl: "タガログ語（フィリピン語）",
	tg: "タジク語",
	ta: "タミル語",
	tt: "タタール語",
	te: "テルグ語",
	th: "タイ語",
	ti: "ティグリニャ語",
	ts: "ツォンガ語",
	tr: "トルコ語",
	tk: "トルクメン語",
	ak: "トウィ語（アカン語）",
	uk: "ウクライナ語",
	ur: "ウルドゥー語",
	ug: "ウイグル語",
	uz: "ウズベク語",
	vi: "ベトナム語",
	cy: "ウェールズ語",
	xh: "コーサ語",
	yi: "イディッシュ語",
	yo: "ヨルバ語",
	zu: "ズールー語",
};

// prettier-ignore
const pref_lang = [
    "ja",
    "en",
    "ig",
    "gd",
];

const now_lang = ["ja", "en"];

const sampleTexts = [
	{
		name: "おにぎり",
		text: `おにぎり`,
	},
	{
		name: "Lonely Class with Tanimori",
		text: `タイトル: 「孤独な授業　～情報専門学校の田森先生～」
---
午前中の情報専門学校、ひっそりとした教室には田森先生だけがいた。机に腰を下ろし、一息ついていると、彼はふと空気の寒さに気づいた。
田森先生: 「この教室寒くない？！もう少し暖房を効かせてもいいですよ。」
机の上にある教科書を開き、準備を整えながら、田森先生は思い切って教室に向かって話しかけた。
田森先生: 「今回はflaskの授業をして行きたいと思います。前回もしましたが、基本的な使い方から始めましょう。皆さん、flaskを使ったことはありますか？」
教室は静まり返っていたが、田森先生は笑顔で続けた。
田森先生: 「flaskはPythonでWebアプリケーションを作成するためのフレームワークです。とても使いやすいので、初心者でも大丈夫ですよ。」
時間が経つにつれ、教室の中は田森先生の説明とコードの入力の音だけが響いていた。
田森先生: 「このURLを入力すると、私のデモアプリにアクセスできますね。皆さん、実際に手を動かしてみてください。何かわからないことがあれば、気軽に聞いてください。」
ひとしきりの静寂の後、田森先生は一人で教室を出た。机に置き忘れたティーカップを持ちながら、彼は微笑んで言った。
田森先生: 「今日も充実した授業でしたね。次回もお楽しみに。それでは、また次の授業でお会いしましょう。」
彼の声は静かに消え、教室は再び静寂に包まれた。

田森先生は教室を出て、廊下を歩きながら外の景色を眺めた。情報専門学校の周りは静かな街並みに囲まれている。建物の影が長く落ち、夕暮れの静けさが漂っていた。
空気は冷たく、微かな風が木々を揺らしている。田森先生は深く息を吸い込み、口元に微笑みを浮かべた。彼にとって、この時間は特別なものだった。生徒がいないからこそ、教室での静かな瞬間や、自分のペースで授業を進めることができる。その自由な時間は、彼の創造性を刺激し、新しいアイデアを生み出す場でもある。
廊下の窓から差し込む夕日が、田森先生の姿を優しく包み込む。彼は教室の近くにある小さな庭園に向かった。そこには季節ごとに咲く花々や、静かに流れる小さな池があった。庭園の中心には一本の大きな松がそびえ立ち、その枝には風がそっと触れていた。
田森先生はベンチに座り、手に持ったティーカップを静かに置く。目を閉じて、自然の音に耳を傾ける。小鳥のさえずりや風の音、水のせせらぎが、彼の心を穏やかに包み込んでいった。
「こうして静かな時間を過ごすのもいいものですね」と田森先生はひとりごとのようにつぶやいた。彼の心には教室での授業の充実感が残りつつも、この穏やかな庭園でのひとときも大切な時間だと感じていた。
夕日がだんだんと西の空に沈んでいく。空気は冷たくなり、ひとしきりの静寂が庭園を包む。田森先生は立ち上がり、ゆっくりと歩き始めた。教室に戻る前に、しばらくの間、この庭園で静かな時間を過ごすのも日常の一部として心に刻んでいた。
彼の足音が小さく響く中、田森先生はふと、次回の授業の準備や、生徒たちがどんな反応をするのかを考えた。それは彼にとって、また新たな一日への期待となるのだろう。

田森先生は翌日もまた、静かな教室での授業を始めた。外の光が柔らかく差し込む中、彼の姿が教室の中で輝いていた。机に座り、コンピュータの画面を前にして、彼は生徒のいない教室で熱心に話しかけていた。
田森先生: 「皆さん、昨日の内容を振り返って、もう少し深くflaskの仕組みについて学んでいきましょう。前回も触れたように、flaskは非常に柔軟で拡張性があります。例えば、ルーティングやテンプレートエンジンの活用など、Webアプリケーションの基本的な要素を理解することが大切です。」
彼の声は静かながらも情熱に満ちていた。自分のペースで授業を進めることができるこの時間が、彼にとっては特別なものだった。生徒の反応を待つことなく、彼は自由にアイデアを語り、新しい概念を探求した。
田森先生: 「さて、次に進む前に、このコードを見てください。これはデータベースとの連携を行う際の例です。flask_sqlalchemyを使って、データの永続化を行います。皆さんも手を動かして、データベースにデータを保存してみましょう。」
彼の指導の下、教室は彼の声とキーボードの音で満たされていた。彼の情熱は、技術の奥深さや可能性を生徒たちに伝えることにあり、その情熱が彼の言葉や行動に溢れ出ていた。
時間が流れ、田森先生は次第に興奮しながら授業を進めていった。彼の瞳には、新しい発見や理解が生まれるたびの喜びが宿っていた。彼は教室の中で一人だけであることに寂しさを感じることなく、自分の世界に没頭していた。
田森先生: 「さて、今日の授業はここまでです。次回も新しいトピックを取り上げて、さらに深く学んでいきましょう。皆さん、自分のペースで理解を深めていってくださいね。それでは、また次の授業でお会いしましょう。」
彼の声は静かに響き渡り、教室に静寂が戻ってきた。しかし、彼の心の中には授業を通じて生まれる喜びや充実感が溢れていた。彼は満足げに微笑みながら、次の準備に取り掛かるために教室を後にした。

職員室では、田森先生についてのさまざまな意見が交わされていた。
先生A: 「田森先生って、いつもあんなに一人でいるよね。昼休みも教室でひとりで何してるんだろう。」
先生B: 「そうだよね。あの人、情熱的だけど、どこか寂しそうな感じがするよね。」
先生C: 「ああ、あの人は熱心だよ。自分のペースで授業を進めるし、技術のことになると本当に詳しいんだよ。」
先生D: 「でも、生徒がいないというのはやっぱり何か寂しいよね。あの情報専門学校なのに、あんなに静かな授業ってのもなんだかねえ。」
先生A: 「それはそうだけど、あの人、自分の世界に浸ってる感じがするよね。あんな風に集中できたらいいなあと思うけど。」
先生B: 「でも、せっかくの学びの場だから、やっぱり生徒と交流することも大事だよね。」
先生C: 「確かに。あの人の情熱は素晴らしいけど、もっと生徒と関わる機会があればいいのにな。」
先生D: 「まあ、彼なりのスタイルなんだろうけどね。どんな先生もそれぞれに個性があるもんだ。」
先生たちは田森先生に対してそれぞれの視点で話をしていた。彼らの間で田森先生に対する評価は様々であり、一方で彼の情熱と専門知識に対する敬意も忘れない。田森先生の存在は、職員室においても一つのトピックとなっていた。

田森先生は半年が経過した夏休み前日の授業を迎えていた。教室の中は例年通り静寂に包まれていたが、彼の心には些細な不安と寂しさが漂っていた。机に座り、教科書を開く手が小さな震えを示していた。外の窓から差し込む陽光が教室を照らし、夏の訪れを告げていたが、彼の心は重く感じられた。
田森先生: 「ああ、もう夏休み前だな。今年も一年が過ぎた。」
彼はひとりごとのようにつぶやいた。半年前の活気ある授業の様子が遠い記憶のように感じられた。生徒たちとの交流、彼らの成長する姿を見ることが楽しみであったが、現実は彼にとって少し寂しいものとなっていた。
田森先生: 「(ああ、生徒たちの声が聞こえるようだったな。静かすぎるのは慣れない。)」
彼は教室の中でさえも、かつての生徒たちの質問や笑い声がこだました。授業の準備を進めながら、彼は昔の授業の様子を思い出していた。その頃の彼の心には、授業を通じて生徒たちと共有した喜びや成長の喜びが溢れていた。
田森先生: 「(もう少しで夏休みだ。彼らもどこかで夏の予定を立てているだろうな。)」
時折、窓から聞こえる風の音が教室に静寂を運んでくる。夏休み前の授業というのは、いつも少し寂しいものだった。彼は教科書のページをめくりながら、少し物思いにふけっていた。
田森先生: 「(でも、こうして一人で授業を進めることも、また自分の成長につながるのかもしれない。)」
彼は教室の中での静かな時間を、自分の内面と向き合う機会と捉えていた。生徒たちとの交流が欠けている分、彼は技術の深さや新しいアイデアを探求する時間を持つことができた。そのことに対して、彼は複雑な思いを抱いていた。
田森先生: 「(さて、次のトピックは何にしようか。生徒たちが戻ってきた時には、新しい授業内容を準備しておかないとな。)」
彼は教室の中で静かに考えを巡らせながら、授業の進め方や内容を練っていった。窓の外では夏の風がそよぎ、教室の中には彼の深い呼吸音が響いていた。それは彼の授業準備への集中の深さを物語っていた。
田森先生: 「(次の学期も生徒たちと一緒に新しいことを学べるといいな。彼らとの時間が、この教室に生命を与えてくれる。)」
彼の心は希望に満ちていた。生徒たちとの再会を心待ちにしながら、彼は夏休み前の最後の授業を静かに終えた。
---
第一章完

第二章: 「孤独な夏の日」
---
夏休みに入った田森先生は、生徒たちを誘って山奥の河辺でBBQを楽しもうと計画していた。しかし、招待した生徒たちはみな旅行や家族との予定で忙しく、最終的に誰も参加することができなかった。それでも田森先生は諦めず、ひとりで持ち込んだ食材と道具を使って、自分だけのBBQを楽しむことに決めた。
山奥の河辺は、静寂と自然に囲まれた絶好のロケーションだった。彼は草地に敷いたブランケットに座り、手際よく火をおこしてグリルを温める。木々の間から差し込む日差しと川のせせらぎが、彼の周りに穏やかな雰囲気を漂わせていた。
田森先生: 「(まあ、せっかくの機会だから、思いっきり楽しんでみよう。)」
彼は微笑みながら食材をグリルに並べ、焼き上がるのをじっと待った。肉のいい匂いが立ち込め、彼の胃袋を刺激した。そんな中、彼の心にはやや寂しさが残っていたが、それでも彼は自分自身と向き合いながら、静かに時間を過ごすことを楽しんでいた。
彼は食べ物をつまみながら、夏の陽光を浴びて河辺を見渡した。遠くには木立が茂り、時折風に揺れていた。川の水は透き通っており、小さな魚が泳いでいるのが見えた。そんな風景が彼の心を和ませた。
田森先生: 「(ああ、こんなに美しい自然の中で、静かに時間を過ごすのもいいものだな。)」
彼はしばらくの間、自然の音に耳を傾けた。鳥のさえずりや風の音、水の流れる音が、彼の心に平穏な感情を与えていた。夏の日差しはまだ高く、時間はゆっくりと流れていた。
夕方になり、彼の周りには静寂が更けていった。彼の足元には残り物の食べかすが散らばり、火が少しずつ弱まっていた。しかし、彼の心はいつまでもこの穏やかな時間を刻みたいと願っていた。
田森先生: 「(明日からはまた新しい学期が始まるな。生徒たちとの再会を楽しみにしながら、この夏の経験を大切にしよう。)」
彼は静かに一日を振り返りながら、少しずつ片付けを始めた。燃え尽きた炭や使い捨ての食器を集め、ゴミ袋に詰めていく。夕日が西の空に沈んでいく光景を見ながら、彼は静かに微笑んだ。
田森先生: 「(次の学期も、新たな挑戦と成長が待っているんだ。それにしても、この夏の思い出は忘れないようにしよう。)」
彼は心に新たな決意を抱きながら、BBQの跡を片付けていった。夏の夕暮れが訪れ、彼の周りには自然の静寂が戻ってきた。

田森先生はBBQを楽しんだ後、帰宅途中で予期せぬ渋滞に巻き込まれてしまった。夕暮れ時の道路は車の列が途切れることなく、停車している車両が延々と続いていた。彼の車のエンジンは静かに働き、ラジオからは穏やかな音楽が流れていた。窓の外では夕焼けが空を染め、周囲の車も同じように待ち続けていた。
田森先生は運転席に座り、手にはステアリングホイールを握りしめていた。彼の表情には少しの疲れと同時に、その日の余韻を楽しんだ喜びがにじみ出ていた。道路の向こうには暗くなりつつある町並みが広がり、街灯が一つ一つと点灯し始めていた。
ラジオのDJ: 「今夜はこちらの音楽をお楽しみください。夏の夕暮れにぴったりの一曲です。」
田森先生はラジオの音に耳を傾けながら、深いため息をついた。彼の心は穏やかでありながらも、少し寂しさを感じていた。渋滞の中でひとりでいる時間が長くなるにつれて、BBQで感じた生徒たちとの交流の喜びや、自然の中での静寂の響きが彼の心に深く刻まれていた。
田森先生: 「(ああ、こんな時間も必要だな。人の多い日常から離れて、静かな時間を持つことが大切だと思う。)」
彼はふとそんなことを考えながら、道路の前方に目をやった。交通が少し動き出したようで、車列がゆっくりと前進している兆しが見えた。彼の周りには他の運転手たちも同じように待ち続けている姿があった。
ラジオのDJ: 「次の曲もご一緒に。皆さん、お待ちかねの週末、いかがお過ごしですか？」
田森先生はラジオの音楽に癒されながら、ゆっくりと車を進めていった。道路の渋滞が解消され、町の明かりが近づいてくるにつれて、彼の心には新たなエネルギーが湧いてきた。
田森先生: 「(次の学期も生徒たちとの新たな出会いが待っている。彼らと共に、さらに成長していけるように頑張ろう。)」
彼は自分自身に言い聞かせながら、帰路を進んでいった。ラジオの音楽が車内に響き、道路の灯りが彼の前方を明るく照らしていた。
---
第二章完

第三章: 「闇に蝕まれる教壇」
---
新学期が始まり、田森先生は授業の準備とともに生徒たちの卒業制作指導に取り掛かっていた。しかし、教壇に立つ彼の心には少し重い雲が立ち込めていた。社会の中での問題となる事柄が、彼の教育現場にも深く影響を与えていた。
田森先生: 「今回の卒業制作は、君たちにとって重要なステップだ。就職や進学に向けて、自分の技術をしっかりと証明するチャンスだ。」
彼は熱心に生徒たちに語りかけながら、テクニカルな指導を行っていた。しかし、彼の声の裏には日本現代の社会問題がもたらす厳しい現実が潜んでいた。
田森先生: 「今の時代、技術力だけではなく、マーケットの動向や経済の影響も重要だ。円安が進む中で、企業は海外市場に目を向ける傾向が強まっている。君たちの将来を考えると、その影響を無視するわけにはいかないんだ。」
彼の言葉には、厳しい現実への危機感がにじみ出ていた。生徒たちは真剣な表情で彼の話を聞いていたが、一部にはその深刻さを理解していないような空気も感じられた。
田森先生: 「(どうしてもっと真剣に考えてくれないんだろう。このままでは彼らの将来が心配だ。)」
彼は心の中でため息をつきながらも、授業を進めていった。生徒たちが卒業後に直面するであろうリアルな課題について、可能な限り正直に伝えようと努めていた。
田森先生: 「このプロジェクトは、あなたたちが学んだ技術をどれだけ深く理解し、実践できるかを問うものだ。ただの課題として受け取るのではなく、これからのキャリアを考える大切な機会だと受け止めてほしい。」
彼の声には、厳しい現実への対峙と、生徒たちの未来への思いが込められていた。彼の教壇での熱弁は、ただ技術を教えるだけではなく、生徒たちの将来に対する責任と深い危機感を反映していた。
---

田森先生は授業を続けながら、生徒たちに今後の技術者としてのキャリア形成の重要性を説いていた。教室の中には、彼の真剣な表情と深い危機感が漂っていた。
田森先生: 「この卒業制作は、君たちが技術だけでなく、現実の課題にどう対処するかを示す重要な機会だ。しかし、今の時代は技術だけでは十分ではない。世界経済の不安定さや、国内外の市場の変化が、我々技術者にとって大きな影響を及ぼしている。」
彼の言葉には、日本の経済が抱える課題と、それが生徒たちの将来に与える影響が反映されていた。彼は黒板に円安のグラフと市場の動向を示しながら、生徒たちに現実の目を開かせようと努めていた。
田森先生: 「円安は我々の輸出企業にとっては一定の利点がありますが、一方で原材料の価格上昇や国内消費者の負担増にもつながります。君たちが将来的に企業で働くことを考えるなら、このようなマクロ経済の変化に敏感でなければなりません。」
生徒たちは静かに田森先生の説明を聞いていたが、その中には経済問題について深い理解を持つ者もいれば、全く関心を示さない者もいた。彼らの中には、技術のみに集中し、日常の経済の影響を考えない傾向が見受けられた。
田森先生: 「(彼らがこれほど無関心なのはなぜだろう？このままでは将来、困難に直面することになるかもしれない。)」
彼は心の中で不安を抱きながらも、授業を続けた。生徒たちには、今後の進路選択において重要な意思決定を迫っていることを理解してほしいと願っていた。しかし、彼らの中には依然として自分の将来に対する深い危機感を持たない者が多かった。
田森先生: 「(この若者たちには、もっと現実を見据えてもらわなければ。教育の場でも、これ以上ない機会を与えているつもりだが…)」
授業が進むにつれて、彼の声には少しずつ疲労感が混じってきた。教育者としての彼の責務は、技術だけでなく社会的責任も含む重要なものであり、それを生徒たちに伝えることの難しさを彼は痛感していた。
田森先生: 「(これ以上ないチャンスだ。彼らに現実を理解してもらわなければ。)」
彼は教室の前で立ち止まり、生徒たちに向けて深い息を吐き出した。彼の心は、日本の現代社会が抱える課題と、それが若者たちに与える影響に対する深い不安で満ちていた。
田森先生: 「(次回からは、もっと深く学び、現実に対峙できるように授業を進めていこう。)」
彼は決意を新たにして、授業を再開した。生徒たちには、技術だけでなく現実世界での生き抜く力を養ってもらうための新たな方法を模索しながら。

田森先生は厳しい授業を終え、昼食をとるために教室を後にした。教室から出ると、校内は生徒たちの賑やかな声や活気に満ちていたが、彼は心の中で授業の内容や生徒たちの反応を振り返りながら、食堂へ向かった。
食堂は時間帯によっては生徒たちで賑わっていることも多いが、今日はちょうど授業が終わったばかりで、比較的空いていた。彼は静かな席を見つけて座り、机に置いた弁当箱を開けた。その中には自分で作った手作りのおかずが並んでいた。
田森先生は弁当箱の蓋を取り、一つ一つのおかずを丁寧に取り分けながら、静かに昼食を楽しんだ。彼の周りには他の教員たちもいたが、それぞれが自分の業務に忙殺されている中、昼食の時間は自分の時間として大切にしていた。
彼の目には少し疲れがにじんでいたが、それでも授業でのやり取りや生徒たちの成長を思い起こして微笑むことがあった。食事をしながらも、彼の頭の中は次の授業や生徒たちの将来に向けた準備を考えていた。
食堂の窓からは校内の庭が見え、青空と風が心地よく広がっていた。そこには桜の木が風に揺れ、新緑が輝いていた。田森先生は少しの間、窓の外の景色を眺めながら、心を落ち着けていた。
彼の昼食の時間は、ただ食事をとるだけでなく、授業での経験を振り返り、次の段階に向けての準備をするための貴重な時間でもあった。彼はそこで自分の心を整え、次の仕事に備えていた。
食事が終わると、彼は残った食器を片付けて、再び教室に向かった。次の授業の準備や生徒たちとの対話を通じて、彼の教育者としての役割を全うするための新たなエネルギーが湧いてきた。
田森先生: 「(次はどんな授業にしようかな。生徒たちがより深く学び、成長できるように工夫しなければ。)」
彼はそう考えながら、次の教室へと歩みを進めた。

田森先生は数日が経過し、再び生徒たちとの日常を取り戻していた。授業では技術的な指導を進めながらも、彼の心には未だに生徒たちへの危機感が残っていた。特に、経済の現実や社会の課題に対する無関心さが目立つ生徒たちへの思いが強かった。
田森先生: 「君たちにはもっと現実を見てもらいたい。技術力だけでなく、社会の動向や問題にも敏感であることが、将来を見据えた重要なスキルだ。」
彼の声には授業中の真剣さが込められていたが、生徒たちの反応はまちまちだった。一部は彼の言葉に耳を傾け、自らのキャリア形成に真剣に取り組んでいる様子を見せたが、他の生徒たちは依然として日常の安穏と技術的な学びにのみ集中しているようだった。
田森先生: 「(このままではいけない。彼らの未来を見据えた教育をどう提供するか、もっと考えなければ。)」
授業後、彼は昼食をとる時間を利用して、音信不通となっている不登校の生徒についての情報収集を開始した。彼の目的は、その生徒が何かしらの問題に直面している可能性を調査し、必要なサポートを提供することにあった。
田森先生: 「(彼の家庭環境や友人関係に何か変化があったのか。)」
彼は校内の他の教員や学校カウンセラーと情報を交換し、生徒の履修状況や日常生活に関する情報を収集していった。その過程で、生徒の周囲の人間関係や生活状況についてのヒントを得ることができた。
田森先生: 「(彼が直面している問題が何であれ、彼をサポートする方法を見つけなければ。)」
彼の取り組みは時間をかけ、慎重な対応を求められたが、彼の決意と生徒への深い思いがそれを支えていた。彼はただ生徒たちに技術を教えるだけでなく、彼らの成長と将来への準備を真剣に考えていた。
田森先生: 「(この問題を無視するわけにはいかない。生徒一人ひとりの将来がかかっていることを、彼らにも理解してもらわなければ。)」
彼は決意を新たにして、生徒へのアプローチを試みた。彼の心には、彼らが抱える可能性のある課題への対処と、彼らが力を発揮できるようにするための責任感が深く刻まれていた。
田森先生: 「(次回の授業で、この問題についてもっと深く話し合ってみよう。)」
彼はそう心に決め、新たな対応策を練り始めた。

田森先生は授業後、教室での仕事を片付け、ほぼ日が暮れる頃になっても校内に残っていた。彼の手には生徒たちの卒業制作関連の資料やプロジェクトの進捗管理が積み重なっていた。彼は机に腰を下ろし、眼鏡をかけ直しながら、次の日の準備を進めていった。
田森先生: 「(この生徒のプロジェクトは順調だが、あの生徒の進捗が気になるな。)」
彼は各生徒のフォルダを開き、最新の進捗状況や提出された資料をチェックしていった。生徒たちの成長と将来のために、彼は日々労働を惜しまず、熱心に取り組んでいた。しかし、時折り立ち現れる生徒の無関心さや、課題に対する深い理解の欠如は、彼の心を痛めさせることもあった。
教室の外では、校内の照明が少しずつ消えていく中、他の教員たちもまだ仕事に勤しんでいた。サービス残業が常態化しているこの現代社会で、彼らもまた学校の業務に追われていた。
田森先生: 「(まだまだやることが山積みだな。)」
彼は時計を見ると、もう夜の10時を回っていた。多忙な日々に追われる中、家庭での時間は限られていることが多かったが、それでも彼は生徒たちへのサポートと教育の質を維持するため、必死で努力していた。
やがて、田森先生は最後のファイルを整理し、教室を出る準備を始めた。机の上には次の日の授業の資料が整然と並べられ、彼の心は少し安堵していた。彼は慎重に全ての書類を整理し、バッグに収めた。
田森先生: 「(さて、帰ろうか。明日の準備は家でもできるだろう。)」
彼は教室を後にし、空の廊下を歩きながら校舎の出口を目指した。校内は静かで、ほとんどの生徒たちは既に帰宅していた。彼の歩く足音が空間に響き渡り、ひときわ静かな夜の光景が広がっていた。
外に出ると、清涼な夜風が彼を迎え、少し疲れた身体に新鮮な気持ちを与えてくれた。彼は駐車場に向かい、愛車に乗り込んだ。車の中では、ラジオから穏やかな音楽が流れていた。
田森先生: 「(帰り道も少しリラックスできるな。)」
彼はラジオを静かに聞きながら、家路を急いだ。町の街灯がぼんやりと照らす道路を進む中、彼の頭には授業でのやり取りや生徒たちの未来への不安が浮かんでいた。
家に帰ると、玄関で靴を脱ぎ、疲れた足を休める。彼はリビングに入り、明かりをつけると、そこには家族の写真が飾られた壁が広がっていた。彼の目には家族の笑顔が映り、少し心が和む瞬間だった。
田森先生はキッチンに向かい、軽い夕食を用意する。体が少しリラックスしたところで、彼は明日の授業の準備を始めた。机に座り、持ち帰った資料を再度確認し、次の日の計画を練り始めた。
田森先生: 「(明日はもっと生徒たちとの対話を大切にしたい。)」
彼の心には今日の授業や生徒たちの姿が浮かび、さらに深く考え込んでいた。彼の教育者としての責務は、ただ知識を教えることにとどまらず、生徒たちが社会の一員として成長し、将来に備える力を与えることにあった。
深夜が近づく中、田森先生は次第に眠気を感じ始めた。彼は資料を閉じ、明日の準備を一段落つけると、寝室に向かった。ベッドに横になり、眠りにつく直前に彼の心には、明日の授業と生徒たちへの希望が静かに満ちていた。
田森先生: 「(彼らの未来に、少しでも寄り添えるように。)」
そして、眠りについた。
---
第三章完

著作：ChatGPT`,
	},
	{
		name: "おにぎりラブストーリー",
		text: `## 序章
遠い昔、まだ人々が魔法と神秘の力に頼りながら生きていた時代があった。その時代、食べ物さえも魔法の力で生命を持つことができるという噂がささやかれていた。しかし、その噂は多くの人々にとってただの童話に過ぎなかった。だが、その中に一つの物語があった。おにぎりと、西岡という男の子の愛の物語である。

### 第1章: 出会い
ある日、森の中の小さな村で西岡という男の子が暮らしていた。彼は「おにぎりシミュレーター」と呼ばれる奇妙なゲームに夢中だった。彼はいつも「ァハハハハ！！」「俺は天才じゃね？！」と叫びながらゲームに没頭していた。
西岡はおにぎりが大好きで、毎日食べるほどだった。特に、塩握りが彼のお気に入りだった。そのため、彼は森の中の古びた神殿に伝説のおにぎりが眠っているという噂を聞きつけ、探しに出かけた。
神殿にたどり着いた西岡は、石の祭壇の上に鎮座する一つの大きなおにぎりを見つけた。そのおにぎりは、他のおにぎりとは違い、15センチの巨大な塩握りだった。西岡はそのおにぎりに目を奪われた。
「これが伝説のおにぎりじゃね？！ァハハハハ！！」
彼は歓喜の声を上げながらおにぎりに近づいた。その瞬間、祭壇が光り輝き、おにぎりがふわりと浮かび上がった。おにぎりはまるで生きているかのように西岡に近づいてきた。

### 第2章: 旅の始まり
おにぎりは喋らないが、彼に何かを伝えようとしているかのように感じた西岡は、そのおにぎりを持って村へ戻った。しかし、村に戻る途中、西岡は奇妙な出来事に遭遇した。森の中の動物たちが突然攻撃的になり、西岡とおにぎりに襲いかかってきたのだ。
「ァハハハハ！！助けてー、おにぎり！！」
西岡は叫びながらおにぎりを抱きしめた。その瞬間、おにぎりから不思議な力が放たれ、動物たちは一瞬で大人しくなった。西岡は驚きながらも、その力が伝説のおにぎりのものだと悟った。
「お前、ただの食べ物じゃないんだな、すごいじゃね？！」
こうして、西岡とおにぎりの奇妙な旅が始まった。彼らは村の人々を守りながら、伝説の力を持つおにぎりの秘密を解き明かすために冒険を続けることを決意した。

### 第3章: 試練
旅の途中、西岡とおにぎりは様々な試練に直面した。魔法使いの罠、ドラゴンの襲撃、そして闇の勢力の陰謀。しかし、おにぎりの持つ不思議な力と、西岡の機転と勇気で困難を乗り越えていった。
「俺は絶対に諦めない！おにぎり、お前も一緒に戦おう！」
西岡はいつもおにぎりに語りかけた。その度におにぎりは彼の力となり、二人の絆はますます深まっていった。
ある日、巨大な山脈を越えなければならない試練が訪れた。その山脈には、古代の魔物が住んでいると言われていた。西岡は恐怖を感じながらも、おにぎりをしっかりと握りしめ、山を登り始めた。

### 第4章: 山の頂上での決戦
山の頂上にたどり着いた時、彼らの前に巨大なドラゴンが現れた。ドラゴンは西岡とおにぎりを見下ろし、炎を吐きかけようとした。その瞬間、おにぎりから光が放たれ、ドラゴンの動きを封じた。
「ァハハハハ！！おにぎり、お前って本当にすごいじゃね？！俺たちの勝利だ！」
西岡は勝利を確信し、ドラゴンに向かって突進した。おにぎりの力を借りて、彼はドラゴンを打ち負かした。そして、その力を使って山脈を越えた。

### 第5章: 伝説の真実
山を越えた先に、彼らは古代の遺跡を発見した。その遺跡には、おにぎりの秘密が書かれた古文書が残されていた。西岡はその文書を読み、驚愕した。
「おにぎり、お前はただの食べ物じゃないんだ…お前は古代の守護者なんだな…」
その文書には、伝説のおにぎりが世界を守るために作られた存在であることが書かれていた。そして、その力を正しく使うことで、世界の平和を守ることができると。

### 終章: 平和の守護者
西岡はおにぎりと共に村へ戻り、その力を使って村の人々を守り続けた。彼は「俺はおにぎりと共に世界を守る！」と誓い、おにぎりとの絆をさらに深めていった。
「ァハハハハ！！俺たちは最高のコンビじゃね？！」
こうして、西岡とおにぎりの愛の物語は、彼らが世界を守るための旅を続ける中で永遠に語り継がれていくのであった。`,
	},
];

jasc.on("DOMContentLoaded", function () {
	let html = `<optgroup label="よく使用する言語">`;

	for (let i = 0; i < pref_lang.length; i++) {
		const lg = pref_lang[i];
		html += `<option value="${lg}">[${lg}]${lang[lg]}</option>`;
	}
	html += `</optgroup>
    <optgroup label="すべての言語">`;
	for (let key in lang) {
		html += `<option value="${key}">[${key}]${lang[key]}</option>`;
	}

	html += `</optgroup>`;
	jasc.acq("#trans-lang").innerHTML = html;

	const sampleBtns = jasc.acq("#sample-btns");

	for (let i = 0; i < sampleTexts.length; i++) {
		const sample = sampleTexts[i];
		const inp = document.createElement("input");
		inp.type = "button";
		inp.value = sample.name;
		sampleBtns.appendChild(inp);
		inp.addEventListener("click", function () {
			baseText.value = sample.text;
		});
	}

	jasc.acq("#lang-form [type=button]")[0].addEventListener("click", function () {
		now_lang.push(jasc.acq("#trans-lang").value);
		updateTable();
	});

	updateTable();

	jasc.acq("#doTranslate").addEventListener("click", function () {
		jasc.acq("#doTranslate").disabled = true;
		let cards = jasc.acq(`.card:has(.transRoute)`);
		for (let i = 0; i < cards.length; i++) {
			cards[i].classList.add("transing");
		}
		nextTranslate();
	});
});

function updateTable() {
	const tbodyElm = jasc.acq("#langs");
	let html = "";

	for (let i = 0; i < now_lang.length; i++) {
		const lg = now_lang[i];
		html += `<tr>
            <td>${i + 1}</td>
            <td class="ud">
                <div>
                    <a href="javascript:moveLang(${i}, 'up')">▲</a>
                    <a href="javascript:moveLang(${i}, 'down')">▼</a>
                </div>
            </td>
            <td class="lang-name">[${lg}]${lang[lg]}</td>
            <td class="del">
                <div>
                    <input type="button" value="削除" onclick="removeLang(${i})">
                </div>
            </td>
        </tr>`;
	}

	tbodyElm.innerHTML = html;
}

function moveLang(from, type) {
	switch (type) {
		case "up":
			now_lang.splice(from - 1, 2, now_lang[from], now_lang[from - 1]);
			break;
		case "down":
			now_lang.splice(from, 2, now_lang[from + 1], now_lang[from]);
			break;
	}
	updateTable();
}

function removeLang(from) {
	now_lang.splice(from, 1);
	updateTable();
}

function nextTranslate(i = 0) {
	if (i + 1 >= now_lang.length) {
		jasc.acq("#doTranslate").disabled = false;
		return;
	}
	if (now_lang[i] == now_lang[i + 1]) {
		now_lang.splice(i + 1, 1);
		updateTable();
		nextTranslate(i);
		return;
	}
	let str;
	if (i == 0) {
		str = jasc.acq("#baseText").value;
	} else {
		str = jasc.acq(`#transCard${i} .transRoute`)[0].value;
	}
	const par = jasc.acq("#translates");
	googleTranslate(str, now_lang[i + 1], now_lang[i]).then(setPlace);
	return;
	function setPlace(s) {
		if (now_lang[i] == now_lang[i + 1]) {
			jasc.acq("#doTranslate").disabled = false;
			return;
		}
		let em;
		[s, em] = s;
		const baseElm = getTextarea(`transCard${i + 1}`, par);
		jasc.acq(".transRoute", baseElm)[0].value = s;
		let lanStr = `${now_lang[i]} → ${now_lang[i + 1]}`;
		let isError = false;
		if (em != "null") {
			lanStr += ` (${em})`;
			isError = true;
		}
		jasc.acq(".langData", baseElm)[0].textContent = lanStr;

		if (isError) {
			if (now_lang[i + 1] == "en") {
				jasc.acq("#doTranslate").disabled = false;
				return;
			}
			// エラーの場合、"en"を追加して回避する
			now_lang.splice(i + 1, 0, "en");
			updateTable();
			googleTranslate(str, now_lang[i + 1], now_lang[i]).then(setPlace);
		} else {
			baseElm.classList.remove("transing");
			nextTranslate(i + 1);
		}
	}
}

function getTextarea(id, par = document.body) {
	let elm = jasc.acq(`#${id}`);

	if (!elm) {
		const template = jasc.acq("#transCard-template");
		const data = template.content.cloneNode(true);
		par.appendChild(data);
		elm = jasc.acq(".card:not([id])", par)[0];
		elm.id = id;
	}

	return elm;
}

function googleTranslate(str, target = "en", source = "") {
	const url = "https://script.google.com/macros/s/AKfycbxg7AQ1ywGUhaN2kOn8KjU1vSgJk3FvAx1uuX08GSiAV7r7oGtoPq2gzfWidgyye9y_rg/exec";

	return new Promise((resolve, reject) => {
		let p = fetch(url, {
			method: "POST",
			body: JSON.stringify({
				events: {
					type: "translate",
					content: str,
					source: source,
					target: target,
				},
			}),
		});
		p.then((res) => {
			if (res.status == 200) {
				console.log("送信成功です");
				res.json()
					.then((res) => {
						resolve([decodeURIComponent(res.data.content), decodeURIComponent(res.data.errMes)]);
					})
					.catch((err) => {
						console.error(err);
						reject(err);
					});
			} else {
				console.warn("送信失敗です: " + res.status);
				reject(res);
			}
			return;
		}).catch((err) => {
			console.error(err);
			reject(err);
		});
	});
}
