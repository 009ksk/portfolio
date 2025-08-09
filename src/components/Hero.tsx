export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Keisuke Kubota
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          フルスタックエンジニア / 個人開発者
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
          React、TypeScript、AWSを中心とした技術スタックで、
          ユーザーに価値を提供するプロダクトの開発に取り組んでいます。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#skills"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            技術スタックを見る
          </a>
          <a
            href="#projects"
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            プロジェクトを見る
          </a>
        </div>
      </div>
    </section>
  );
}
