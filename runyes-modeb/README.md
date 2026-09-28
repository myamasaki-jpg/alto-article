# Runyes 3DS 3.0 広告LP

確定版 `../lp-structure.md`（v2）に基づく、フレームワーク・ライブラリ・外部フォントを使用しない静的LPです。今回の画像制作範囲はグループ1の3枚のみ。公開・デプロイは行っていません。

## 納品ファイル

```text
lp/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/
│       ├── fv-bg.webp
│       ├── fv-bg-sp.webp
│       ├── s02-main.webp
│       ├── logo.png
│       └── product-01.png
└── README.md
```

遷移型のため `thanks.html` とLP内フォームは作成していません。完了ページとCV計測はFEED側で扱います。

## 公開前に差し替える箇所・確認事項

| 対象 | 設定・差し替え内容 |
| --- | --- |
| `index.html` の `GTM_HEAD` / `GTM_BODY` | 本番GTM IDを設定済みの各スニペットへ差し替え。コメント位置を保持して挿入。 |
| すべての `.cta` の `href` | 現在は確定済み `https://dental.feed.jp/entryform/152runyes_ad/` を設定。フォームURLが変わる場合は6か所を一括変更。action・埋め込みコードの設定は不要。 |
| GTMでのCTA計測 | カスタムイベント `cta_click` とデータレイヤー変数 `cta_position` を設定。値は `fv` / `s03` / `s04` / `s05` / `final` / `sticky`。申込完了CVと区別する。 |
| フッターの販売会社名・所在地 | 正式な会社名と住所を確認し、本文の未確認表記を差し替え。 |
| フッター「特定商取引法に基づく表記」 | `href="#"` を正式URLに差し替え。 |
| フッター「プライバシーポリシー」 | `href="#"` を正式URLに差し替え。リンク先の未確認表記を処理。 |
| `og:url` | 現在は空欄。確定した本番LPの絶対URLへ差し替え。推測したドメインは設定していない。 |
| `og:image` | 現在は `assets/img/og-image.jpg` を参照。本番ドメイン付き絶対URLへ差し替え。確定版画像一覧の `og-image` を採用しており、共通指示の `ogp.png` とは異なる。 |
| OGP画像 | グループ4で1200×630の `og-image.jpg` を作成済み。Pillowで `fv-bg.webp` に提供された `product-01.png` を右下寄りに合成。画像生成は使用せず、文字の追加もなし。 |
| favicon | `[要確認]` ロゴから作るか。確定版の「生成しない」を優先し、今回はファイル・有効なlinkタグとも未作成。方針決定後 `assets/img/favicon.png`（32×32）とlinkタグを追加。 |
| 未生成画像 | グループ1〜4の画像11枚とOGP合成1枚は追加済み。未生成画像なし（faviconは上記の方針確認待ち）。 |
| 提供画像・プレースホルダ | `provided/logo.png` と `provided/product-01.png` をそのままコピー済み。提供画像の不足がないためプレースホルダ画像・差し替え依頼はなし。 |
| 本文の未確認事項 | 本文からは外し済み。「未確認事項の扱い」の表のとおり、情報が来たら追記する。 |
| FEED側フォーム | 住所が任意へ変更されていることを公開前に確認。LPでは変更していない。医療関係者確認は遷移先に任せ、LP入口にモーダルは置いていない。 |
| 電話窓口 | `[要確認]` 有無と番号。現時点では電話ボタンなし。確定した場合のみ追従CTAに併設。 |
| ブランド色 | `[要確認]` 正式指定色。今回は構成案の濃紺・赤を使用。 |
| 検索インデックス | `index.html` に `noindex` は入れていない。検索流入を止める運用なら、必要なら追加。 |

## 構成案の条件付き項目の扱い

- S05は構成案指定の代替文「Runyes 3DS 3.0 の操作とデータの見え方をご確認いただけます」を掲載し、「デモで見られる内容 [要確認]」も編集対象として本文に残しています。
- S07のPC回答は指定の代替文「推奨仕様は担当からご案内します」を使用し、「仕様の表 [要確認]」を残しています。
- S07の「取引先の技工所にデータを渡せますか？」は、構成案の「確認できなければこの質問を外す」に従って非掲載です。未確認タグはHTMLコメントに保持しています。確認後は構成案の質問文と確認できた回答を追加してください。
- 製品の性能・費用などは渡された構成案の文言を掲載しています。独自の医学的・法的な確認や、外部情報による補筆はしていません。

## 未生成の画像

グループ2の `s03-sub-1.webp`（器具トレーを整える手元）、`s03-sub-2.webp`（チェア横で会話する二人の後ろ姿）、`s03-bg.webp`（淡い青のグラデーションとごく淡い曲線）は、構成案の画像指示に従って組み込み画像生成ツールで生成し、`assets/img/` に追加済みです。写真は1200×800、背景は1600×900で、いずれもWebP・250KB以下です。文字・数字・ロゴ・透かし・画面・機器出力・口腔内スキャナーを含めず、人物の顔が分からない構図にしています。

グループ3の `s04-bg.webp`（ごく淡いグレーの紙テクスチャ・1600×900）、`s05-main.webp`（午後の院長室で、白衣の人物がノートPCの画面の正面に座る場面を真横90度から撮影。肩から下だけを写し、画面は細い側面の線だけで中身も背面の面も見せない。片手は木製デスク上、もう片方はペンを持って白紙のメモ帳に向かう。人物の体と画面の向きを自然に合わせる・1600×900）、`s05-sub.webp`（閉じたノートPC・ヘッドセット・白紙のメモ帳・ペンのテーブル俯瞰・800×800）も、以上を生成プロンプトとして組み込み画像生成ツールで生成し、`assets/img/` に追加済みです。共通指定は文字・数字・ロゴ・透かし・読めるUI・口腔内スキャナーなし、人物の顔なし。`s05-main.webp` は2026-09-27に上記プロンプトで再生成し、ペンを持たない手をPC上からデスク上へ移す追加編集を行いました。Pillowで寸法調整・WebP圧縮し、各250KB以下にしています。

グループ4も以下のとおり `assets/img/` に追加済みです。`s06-main.webp` と `final-bg.webp` は組み込み画像生成ツールで生成し、Pillowで寸法調整・WebP圧縮しました。生成プロンプトの共通指定は文字・数字・ロゴ・透かし・読めるUI・人物・口腔内スキャナー・機器出力なし。`final-bg.webp` は `fv-bg.webp` を参照画像に使用しています。本文画像は既存HTMLの同名参照で表示され、HTMLの構造・文言・CSSは変更していません。

| グループ | ファイル名 | 用途・生成プロンプト要約／合成方法 | サイズ・比率 |
| --- | --- | --- | --- |
| 4 | `assets/img/s06-main.webp` | 明るい机の俯瞰。梱包された無地の段ボール箱と、ドライバー・ペンチ・巻いたケーブル類。柔らかな自然光、人物なし。 | 1200×800・3:2・約96KB |
| 4 | `assets/img/final-bg.webp` | FVと同じ窓・青いチェア・白い収納・濃紺の壁・石調カウンターを保ち、少し引いた別アングルと夕方の柔らかい光に。手前右側は商品重ね用の空き。 | 1600×900・16:9・約140KB |
| 4 | `assets/img/og-image.jpg` | PillowでFVを1200×630へ中央トリミングし、提供商品写真を幅700pxに縮小して右50px・下42pxの余白でアルファ合成。画像生成・文字追加なし。 | 1200×630・約1.91:1・約122KB |

画像一覧のグループ1〜4はすべて追加済みで、未生成の画像はありません。faviconは構成案どおり未作成のままです。

## 使用色とフォント

| CSS変数 | 値 | 選定理由 |
| --- | --- | --- |
| `--color-primary` | `#1E2D55` | 構成案指定の濃紺。見出し・製品情報に信頼感と明瞭なコントラストを持たせる。 |
| `--color-accent` | `#456C89` | 診療室の青と商品写真の青に合わせ、区切り・線画に使用。 |
| `--color-cta` | `#C8102E` | 構成案指定の赤。CSSではCTAの背景だけに使用し、価格などには使用しない。提供ロゴの色は原本を維持。 |
| `--color-text` | `#273349` | 濃紺と調和し、長文を読みやすくする本文色。 |
| `--color-bg` | `#FFFFFF` | 清潔感のある白基調。 |

補助色は `#EDF3F7`（薄青背景）、`#D8E1E8`（罫線）など。指定の日本語システムフォントスタックを `--font-base` に定義し、bodyに適用しています。ウェイトは400・700。外部フォント・外部CSS・外部JSの読込なし。ブレークポイントは768pxと1024pxのみ。

## 生成した画像

3枚とも組み込み画像生成ツールで生成し、Pillowで指定寸法へ調整・WebP圧縮しました。商品やロゴは生成していません。

| ファイル名 | 用途・サイズ | 生成プロンプト要約 |
| --- | --- | --- |
| `assets/img/fv-bg.webp` | PCのFV背景・1600×900 | 明るい無人の日本の歯科診療室。午前の自然光、奥にぼけた青いチェア、手前に淡い石調カウンター。右側を商品重ね用に空ける。文字・数字・人物・商品・機器出力なし。 |
| `assets/img/fv-bg-sp.webp` | スマホのFV背景・800×1000 | 生成したPC版を参照し、同じ内装と光で縦構図に。上にチェア、下40%は何もない石調カウンター。共通禁止事項を維持。 |
| `assets/img/s02-main.webp` | 共感セクションの写真・1200×800 | 夕方の院長室のデスク。何も書かれていない書類束、文字も数字もない電卓、閉じた無地のノートPC。人物なし、落ち着いた雰囲気。 |

## 動作と検証

- `.cta` の6か所はすべて確定したFEEDフォームへ同じタブで遷移します。JSが無効でも通常リンクとして利用できます。
- `main.js` はLPのクエリのうち `utm_` で始まるキーのみを遷移先へ引き継ぎます。複数値・空値・日本語・プラス記号を含む値を維持します。URLエンコードの表現はURL APIで正規化されます。`fbclid` などの他パラメータやURLハッシュは転送しません。
- クリック時に `{ event: 'cta_click', cta_position: '<位置>' }` をdataLayerへpushします。既存のdataLayerを維持し、未定義なら初期化します。遷移を遅らせる処理や購入完了イベントはありません。
- FAQはネイティブの `details` / `summary`。追従CTAは1024px以上で非表示。画像はwidth/heightで領域を確保し、FV以外は遅延読込します。
- HTML構造、セクション・CTA数、画像属性、外部依存なし、メタ説明105字、JS構文、UTM引き継ぎ・イベント送出を静的検査とNode実行で確認しました。実ブラウザーでの表示確認・FEEDへの実申込は行っていません。
- 現時点のHTML＋CSS＋JS＋画像は約510KB（0.51MB）。後続画像追加後に再集計してください。

## 未確認事項の扱い (2026-09-26 Claude が本文を整理)

本文に見える `[要確認]` は 0 件にした。確定していない情報は本文から外し、確定した事実だけの文にしている。元の状態は `../index.before-cleanup.html`。

| 箇所 | 今の表示 | 情報が来たら |
|---|---|---|
| S03 使いどころ | 「対応する用途は…」の行を削除 | 対応する臨床用途を追記 |
| S03 FEED での購入条件 | 「操作説明・故障時の窓口」を削除 | 窓口を追記 |
| S04 費用の表 | 「本体」「お手持ちの PC が推奨仕様を満たせば不要」 | 付属品・PC セットの取扱いと税込価格を追記 |
| S05 デモ | 「操作とデータの見え方をご確認いただけます。」のみ | デモの内容・受付時間帯・必要な機器を追記 |
| S06 流れ ② | 「担当者からご連絡します」 | 連絡方法と目安を追記 |
| S06 流れ ⑤ | 補足なし | 納期の目安を追記 |
| S06 末尾 | **「購入の義務は生じません」を外した** (HTML コメントで保持) | FEED に確認できたら戻す |
| S07 FAQ | 3 問 (PC・毎月の費用・デモに必要なもの) | 「操作説明・相談窓口」「購入義務」「技工所へのデータ受け渡し」を追加 (HTML コメントで保持) |
| フッター | 「販売: FEED デンタル」、リンク 2 つは `href="#"` | **公開前に必須**: 会社名・所在地、特商法・プライバシーポリシーの URL (`PRE_PUBLISH` コメント) |
| favicon / 電話ボタン | 無し (HTML コメントで保持) | 方針が決まれば追加 |

## 生成プロンプト全文

### fv-bg.webp

Use case: photorealistic-natural. Asset: desktop landing-page hero background, a single original photograph, 16:9 landscape, target 1600x900. A bright empty contemporary Japanese dental clinic in soft morning daylight. Pale stone countertop dominates the lower foreground, naturally realistic subtle mineral texture, and a generous completely vacant countertop area toward the right for a scanner that will be added later by CSS. A softly blurred blue dental chair sits behind the counter in the middle distance. Clean white architecture, restrained navy and blue details, trustworthy serene aesthetic. Wide interior architectural photography with natural optical depth of field, photoreal textures and realistic proportions. Keep the right foreground completely empty. No people, no scanner or product, no tooth models, no medical output, no readable UI, no text, no numbers, no letters, no logos, no watermark anywhere. Produce exactly one image.

### fv-bg-sp.webp

Use case: photorealistic-natural. Asset: mobile landing-page hero background, a single original photograph, portrait 4:5 aspect ratio, target 800x1000. Input image is a visual reference for the exact clinic interior, not a product to reproduce. Reframe the same bright empty contemporary Japanese dental clinic vertically. Keep the same pale stone countertop, blue dental chair, white architecture, navy wall accents and morning daylight style. Chair and softly blurred clinic occupy the upper 60 percent; the bottom 40 percent is an entirely empty pale stone countertop with absolutely no objects, ready for a separate product to be overlaid later. Natural architectural photography, subtle realistic mineral texture, serene trustworthy white/navy/blue aesthetic. No people, no scanner or product, no tooth models, no medical output, no readable UI, no text, no numbers, no letters, no logos, no watermark anywhere. Exactly one portrait image.

### s02-main.webp

Use case: photorealistic-natural. Asset: dental-clinic management landing-page editorial photograph, exactly one image, horizontal 3:2, target 1200x800. A Japanese clinic director's office desk at evening, no people. Quiet reflective mood conveyed by warm desk lighting and cooler dusk ambience in a softly defocused office beyond. On the desk: several modest stacks of entirely blank clean white paperwork, a simple calculator whose keys are completely blank and unmarked and whose display is dark and completely blank, and a closed thin notebook computer with plain unbranded lid. Thoughtful subdued composition, natural realistic wood and paper textures, professional photographic quality, soft shadows. Every visible sheet is totally blank: no printing, writing, lines, charts, numbers or marks. The calculator has absolutely no symbols or digits on either buttons or display. No people, no medical scanner, no medical product, no tooth models, no medical output, no readable UI, no text, no numbers, no logos, no watermark anywhere. Produce exactly one photograph.


## 差し替え画像の生成プロンプト（2026-09-27）

以下は `s03-sub-1.webp`・`s03-sub-2.webp`・`s06-main.webp` の最新の生成記録です。上記の同名画像の旧プロンプト（商品なしの指定）を置き換えます。組み込み画像生成ツールを使用し、全3枚に `../provided/product-01.png` を参照画像として渡しました。商品形状・白／グレー／青の配色・丸いボタン・Runyes刻印・グレーの台を維持するよう指定。生成結果を目視で参照画像と照合し、Pillowで1200×800・WebP・各250KB以下に変換しました。

### s03-sub-1.webp

Use case: compositing. Asset: photorealistic Japanese dental clinic landing page scene, one horizontal 3:2 photograph, target 1200x800.
Input image 1 is the exact product identity reference: provided/product-01.png. Place this exact single intraoral scanner and its gray cradle in the scene, preserving the physical design, silhouette, relative proportions, white body, long flattened gray scanning tip on the left, narrow blue band between tip and body, single circular button on top just behind the blue band, gray Runyes engraving on the right side, and the identical molded gray cradle with low curved sides and open central recess. Do not redesign or approximate it as another scanner. Retain its left-tip/right-rear orientation and reference near-side viewing angle so the engraving and blue band remain visible. A short rear cable may exit the frame. Exactly ONE scanner.
Scene: bright clean Japanese dental treatment room in soft natural daylight. On a side table beside a treatment unit, the scanner rests in its original gray cradle. A dental staff member's gloved hand is just about to lift the white body, fingers gently contacting the body toward its middle, without obscuring the blue band, round top button, or Runyes engraving. The scanner is still seated on the cradle at this instant. Close-up of hands and scanner with a softly blurred dental chair in the background, realistic life size and natural textures.
No face, no screens, no monitor, no tablet, no PC, no 3D teeth or outputs, no other scanning device. No writing, numbers, logos or watermark anywhere except the original exact Runyes engraving on the product. Do not invent extra product markings. Maintain product geometry and color exactly; no pistol grip. Generate only one photograph.

### s03-sub-2.webp

Use case: compositing. Asset: photorealistic Japanese dental clinic landing page scene, one horizontal 3:2 photograph, target 1200x800.
Input image 1 is the exact product identity reference: provided/product-01.png. Use this exact single intraoral scanner, preserving the physical design, silhouette, relative proportions, white elongated body, long flattened gray scanning tip on the left, narrow blue band between tip and body, single circular button on top just behind the blue band, gray Runyes engraving near the right rear side. Keep the near-side viewing angle and left-tip/right-rear orientation as in reference so blue band, button and engraving can be seen. Do not redesign or replace with a different scanner. Exactly ONE scanner. Its exact same molded gray cradle with low curved sides and open central recess sits EMPTY on the nearby side table, no duplicate device. A subtle cable exits rear and trails naturally out of view.
Scene: beside a dental chair in a bright clean Japanese dental clinic with soft natural daylight. A clinician wearing a white coat, framed only from shoulders down, lightly holds this scanner horizontally at waist level, with a relaxed grip underneath the body center leaving the product identifying features visible. They face a seated patient in the dental chair in quiet ordinary conversation, not a product recommendation or presentation. The patient is seen strictly from behind, with no face or facial profile visible. Crop composition fairly close enough for the scanner to remain clearly recognizable while showing this interaction and part of the chair.
No visible screens, monitors, tablets, PCs, 3D data or medical outputs. No text, numbers, logos or watermark other than the exact original Runyes product engraving. No additional medical device in foreground, no extra product markings, no pistol grip. Generate only one photograph.

### s06-main.webp

Use case: compositing. Asset: photorealistic Japanese dental clinic landing page scene, one horizontal 3:2 photograph, target 1200x800.
Input image 1 is the exact product identity reference: provided/product-01.png. Place exactly this single intraoral scanner resting in exactly its original gray cradle, preserving silhouette, design, relative proportions, white elongated body, long flattened gray tip on the left, narrow blue band between tip and body, single circular button on top just behind the blue band, gray Runyes engraving near the rear right side, and identical molded gray low curved cradle with open central recess. Keep reference near-side viewing angle with tip to left and rear to right, and show blue band, top button and engraving clearly. No redesign, no different scanner, no extra buttons or markings. Exactly ONE scanner. A rear cable may trail discreetly behind it.
Scene: first day of installation in a bright clean Japanese dental treatment room, calm morning natural light. Scanner and its cradle sit prominently on a countertop. Next to it a plain unbranded open laptop with the BACK of its display facing camera, its screen completely facing away and completely invisible. Beside these, an opened plain unprinted cardboard box. No tools. Use calm photographic composition, realistic product size relative to laptop and box, softly blurred clinic background. Product occupies a generous part of foreground for recognizability.
No people, no visible monitor or tablet or PC screen, no 3D teeth, no software UI, no medical outputs. No text, numbers, logos or watermarks anywhere except exact original Runyes engraving. Laptop and box absolutely unmarked. Generate only one photograph.
