import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

export default function App() {
  const ctaUrl = "https://dental.feed.jp/entryform/152runyes_ad/?utm_source=alto&utm_medium=paid";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598531136726-4157529f8cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Dental Scanner Technology"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: '#ea5d7a' }} className="text-sm mb-4 tracking-wide uppercase">
              次世代口腔内スキャナー
            </p>
            <h1
              style={{ color: '#00155f' }}
              className="text-5xl md:text-7xl mb-6 leading-tight"
            >
              RUNYES 3.0
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-[600px] mb-8">
              精度、速度、使いやすさ。<br />
              デジタル歯科治療の新基準
            </p>
            <a
              href={ctaUrl}
              style={{ backgroundColor: '#ea5d7a' }}
              className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              詳細資料を請求する
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-[800px] mx-auto px-6 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 style={{ color: '#00155f' }} className="text-3xl mb-6">
            デジタル化が変える歯科診療
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            従来の印象採得からデジタルスキャンへの移行は、もはや選択肢ではなく必須の流れとなっています。患者様の負担軽減、診療時間の短縮、そして技工物の精度向上。これらすべてを実現するために、口腔内スキャナーの性能が重要な鍵を握っています。
          </p>
          <p className="text-gray-700 leading-relaxed">
            しかし、すべてのスキャナーが同じではありません。臨床現場で求められるのは、高精度かつ高速で、日常診療にスムーズに統合できるシステムです。
          </p>
        </motion.section>

        {/* Product Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1626878880028-0438b1403b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="RUNYES 3.0 Scanner"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 style={{ color: '#00155f' }} className="text-3xl mb-6">
            RUNYES 3.0：臨床精度を追求した次世代スキャナー
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            RUNYES 3.0は、最新の光学技術と独自のアルゴリズムを組み合わせ、従来機種を大きく上回る性能を実現しました。小型・軽量化された本体は長時間の使用でも疲れにくく、スキャン速度の向上により患者様の負担を最小限に抑えます。
          </p>

          {/* CTA 1 */}
          <div style={{ backgroundColor: '#00155f' }} className="p-8 rounded-2xl text-white mb-8">
            <h3 className="text-2xl mb-3">導入をご検討の先生方へ</h3>
            <p className="mb-6 opacity-90">
              RUNYES 3.0の詳細資料、デモンストレーション、導入事例など、詳しい情報をご用意しております。
            </p>
            <a
              href={ctaUrl}
              style={{ backgroundColor: '#ea5d7a' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              資料請求・お問い合わせ
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>

        {/* Technical Features */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 style={{ color: '#00155f' }} className="text-3xl mb-8">
            主要スペック
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div style={{ backgroundColor: '#ea5d7a' }} className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2" style={{ color: '#00155f' }}>高精度スキャニング</h3>
                <p className="text-gray-700">
                  精度±5μmを実現。補綴物の適合性を大幅に向上させ、調整時間を削減します。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: '#ea5d7a' }} className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2" style={{ color: '#00155f' }}>高速スキャン</h3>
                <p className="text-gray-700">
                  全顎スキャンが約60秒で完了。患者様の負担を最小限に抑え、診療効率を向上させます。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: '#ea5d7a' }} className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2" style={{ color: '#00155f' }}>優れた操作性</h3>
                <p className="text-gray-700">
                  軽量設計（約280g）と人間工学に基づいたデザインにより、長時間の使用でも疲労を軽減します。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div style={{ backgroundColor: '#ea5d7a' }} className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2" style={{ color: '#00155f' }}>優れた防曇性能</h3>
                <p className="text-gray-700">
                  先進的な防曇技術により、スキャン中断のリスクを低減。スムーズなワークフローを実現します。
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Clinical Applications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative h-[350px] mb-8 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1758205308179-4e00e0e4060b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Clinical Applications"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 style={{ color: '#00155f' }} className="text-3xl mb-6">
            幅広い臨床応用
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            RUNYES 3.0は、単冠からブリッジ、インプラント、矯正治療まで、幅広い症例に対応します。オープンシステムにより、お好みのCAD/CAMシステムや技工所との連携もスムーズです。
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <div style={{ color: '#ea5d7a' }} className="mt-1">●</div>
              <span className="text-gray-700">クラウン・ブリッジ製作</span>
            </li>
            <li className="flex items-start gap-3">
              <div style={{ color: '#ea5d7a' }} className="mt-1">●</div>
              <span className="text-gray-700">インプラント治療</span>
            </li>
            <li className="flex items-start gap-3">
              <div style={{ color: '#ea5d7a' }} className="mt-1">●</div>
              <span className="text-gray-700">矯正治療（マウスピース矯正含む）</span>
            </li>
            <li className="flex items-start gap-3">
              <div style={{ color: '#ea5d7a' }} className="mt-1">●</div>
              <span className="text-gray-700">審美修復</span>
            </li>
          </ul>

          {/* CTA 2 */}
          <div className="border-2 p-8 rounded-2xl" style={{ borderColor: '#00155f' }}>
            <h3 className="text-2xl mb-3" style={{ color: '#00155f' }}>無料デモンストレーション実施中</h3>
            <p className="text-gray-700 mb-6">
              実際にRUNYES 3.0をお試しいただけます。貴院での使用感を確認してください。
            </p>
            <a
              href={ctaUrl}
              style={{ backgroundColor: '#ea5d7a' }}
              className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-full hover:opacity-90 transition-opacity"
            >
              デモを申し込む
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>

        {/* Advantages */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 style={{ color: '#00155f' }} className="text-3xl mb-6">
            RUNYES 3.0を選ぶ理由
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3" style={{ color: '#00155f' }}>患者満足度の向上</h3>
              <p className="text-gray-700 leading-relaxed">
                従来の印象材による不快感から解放され、スピーディーで快適な診療体験を提供できます。デジタルデータにより、治療計画の説明もより分かりやすくなります。
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3" style={{ color: '#00155f' }}>診療効率の改善</h3>
              <p className="text-gray-700 leading-relaxed">
                印象採得から模型製作、技工所への配送といったステップを省略できるため、治療期間の短縮とコスト削減を実現します。
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3" style={{ color: '#00155f' }}>精度の高い補綴物</h3>
              <p className="text-gray-700 leading-relaxed">
                デジタルデータの正確性により、適合性の高い補綴物を提供でき、チェアタイムでの調整時間を大幅に削減できます。
              </p>
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div style={{ backgroundColor: '#00155f' }} className="p-12 rounded-3xl text-white text-center">
            <h2 className="text-3xl mb-4">デジタル歯科治療を始めませんか</h2>
            <p className="text-lg mb-8 opacity-90 max-w-[600px] mx-auto">
              RUNYES 3.0の導入により、貴院の診療レベルを次のステージへ。<br />
              まずは詳細資料をご請求ください。
            </p>
            <a
              href={ctaUrl}
              style={{ backgroundColor: '#ea5d7a' }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              今すぐ資料請求する
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.section>
      </article>

      {/* Footer */}
      <footer style={{ backgroundColor: '#00155f' }} className="py-8 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm opacity-80 mb-3">
            RUNYES 3.0に関するお問い合わせは、上記フォームよりお願いいたします。
          </p>
          <a
            href="https://alto-article.jp/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm opacity-80 hover:opacity-100 transition-opacity underline"
          >
            プライバシーポリシー
          </a>
          <p className="text-xs opacity-60 mt-4">
            © 2026 RUNYES 3.0 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}