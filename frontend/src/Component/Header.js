import React, { useState } from 'react';
import './Header.css';
import logoImage from '/github/dj_library/frontend/src/Component/picture/dj_logo_big.png'; // ロゴ画像のパスを指定してください

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logoImage} alt="Logo" className="logo-image rotating-logo" />
        <h1 className="title">LIBRARY</h1>
      </div>
      <div className="header-right">
        <div className={`menu-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <h2>DJ_libraryへようこそ！</h2>
          <p>
            DJ_libraryは、あなたの好きな曲をもとに、テンポや曲調が似た楽曲を自動的に提案し、DJセットリストを作成するためのライブラリ作成アプリです。このアプリを使えば、よりスムーズで一貫性のあるDJミックスを簡単に作成できます。
          </p>
          <h3>使用方法</h3>
          <ol>
            <li>
              <strong>好きな曲を検索</strong>: 検索バーに好きな曲を入力して、ライブラリに追加します。
            </li>
            <li>
              <strong>曲を保存</strong>: お気に入りの曲を検索バーに保存し、必要なだけ曲を追加します。
            </li>
            <li>
              <strong>ライブラリを作成</strong>: 保存した曲が十分に集まったら、「ライブラリを作成」ボタンを押します。アプリが自動的にテンポや曲調が似た楽曲を分析し、ライブラリを生成します。
            </li>
          </ol>
          <h3>利用シーン</h3>
          <ul>
            <li>
              <strong>クラブやイベントでのプレイリスト作成</strong>: 一貫したテンポやムードで観客を魅了するミックスを作成できます。
            </li>
            <li>
              <strong>ラジオショーやポッドキャストの制作</strong>: 番組の流れを保ちながら、多様な楽曲を紹介するのに役立ちます。
            </li>
            <li>
              <strong>トレーニングやワークアウトのBGM作成</strong>: テンポの変化が少なく、集中力を維持するためのプレイリストが作成できます。
            </li>
          </ul>
          <p>DJ_libraryで、あなたのDJ活動を次のレベルに引き上げましょう！</p>
        </div>
      )}
    </header>
  );
}

export default Header;