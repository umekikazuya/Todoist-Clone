# Todoist Clone App
- [アプリについて](#%E3%82%A2%E3%83%97%E3%83%AA%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [Tech Stack](#tech-stack)
    - [Frontend](#frontend)
    - [Database](#database)
  - [機能](#%E6%A9%9F%E8%83%BD)
  - [非機能](#%E9%9D%9E%E6%A9%9F%E8%83%BD)
  - [未実装（今後やりたいこと）](#%E6%9C%AA%E5%AE%9F%E8%A3%85%E4%BB%8A%E5%BE%8C%E3%82%84%E3%82%8A%E3%81%9F%E3%81%84%E3%81%93%E3%81%A8)
- [環境構築](#%E7%92%B0%E5%A2%83%E6%A7%8B%E7%AF%89)
  - [001. ソースコード取得 ( `git clone` )](#001-%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%89%E5%8F%96%E5%BE%97--git-clone)
  - [002. Package(ライブラリ)のインストール](#002-package%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [003. Firebase設定](#003-firebase%E8%A8%AD%E5%AE%9A)
    - [1. Firebaseプロジェクトの追加](#1-firebase%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E8%BF%BD%E5%8A%A0)
    - [2. アプリとFirebaseの接続設定](#2-%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A8firebase%E3%81%AE%E6%8E%A5%E7%B6%9A%E8%A8%AD%E5%AE%9A)
    - [3. Databaseの初期構築](#3-database%E3%81%AE%E5%88%9D%E6%9C%9F%E6%A7%8B%E7%AF%89)
    - [4. 開発サーバー起動](#4-%E9%96%8B%E7%99%BA%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E8%B5%B7%E5%8B%95)
- [ディレクトリ構成](#%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90)
  - [設計](#%E8%A8%AD%E8%A8%88)
  - [詳細](#%E8%A9%B3%E7%B4%B0)
- [貢献](#%E8%B2%A2%E7%8C%AE)

## アプリについて
Firebaseを活用したTodoistのCloneアプリケーションです。

本家と加えると簡素ではありますが、ディレクトリ構成やComponents設計等参考いただけますと幸いです。

### Tech Stack
#### Frontend
- React(TypeScript)

#### Database
- Firestore(Firebase)

### 機能
- Task操作: タスクの追加、削除、アーカイブが可能です。
- Project操作: プロジェクトの追加、削除が可能です。
- クイックフィルター機能: 以下の項目でタスクの絞り込みが可能です。
  - インボックス、今日、近日予定
  - プロジェクト
- リアルタイム同期: Firestoreを使用したデータのリアルタイム同期が可能です。

### 非機能
- RoutingSystem<br>[ReactRouter](https://reactrouter.com/en/main)にて構築。
- スタイル<br>[StyledComponents](https://styled-components.com/)にて構築。

### 未実装（今後やりたいこと）
1. サブタスク
2. ユーザー
   1. ユーザー管理
   2. アカウント切り替え
   3. アバター等、プロファイル設定
3. Archive一覧
4. Update機能（Task, Project）
5. 操作の取り消し


## 環境構築
### 001. ソースコード取得 ( `git clone` )
```shell
git clone https://github.com/umekikazuya/Todoist-Clone.git
```

### 002. Package(ライブラリ)のインストール
```shell
npm install
```

### 003. Firebase設定
#### 1. Firebaseプロジェクトの追加
1. 名前の設定
「Todoist-Clone」「TodoSandbox」「TodoDev」など、好きなプロジェクト名を入力.
2. Google アナリティクス（Firebase プロジェクト向け）
有効/無効問わず動作するようにしています。(機能追加できてないので無効を推奨)

#### 2. アプリとFirebaseの接続設定
1. アプリを追加設定
  1. アプリ名を入力(e.g. TodoClone)
  2. Firebase SDKの追加
  `npm`を使用するを選択
2. 環境変数の登録
`/.env.example`をコピーし、`./env`を作成。
手順1 で登録した設定内容を記載する。
**※ `USERID`はこの段階ではまだ。**

#### 3. Databaseの初期構築
1. CloudFirestore画面内の「データベースを追加」ボタンを押下しデータベースを作成する。
2. 以下3つのCollectionの登録を行う。
| Collection名 | 備考 |
| projects | - |
| tasks | - |
| users | 初期DocIDをメモして`env`ファイル`USERID`に入力 |

#### 4. 開発サーバー起動
```shell
npm run dev
```

## ディレクトリ構成
### 設計

```
src
├── assets/
├── components
│   ├── Layout
│   ├── Sidebar
│   ├── Task
│   └── UI
├── firebase/
├── hook/
├── model
│   ├── index.ts
│   ├── project.model.ts
│   ├── task.model.ts
│   └── user.model.ts
├── routes/
├── styles/
├── views/
├── App.tsx
└── main.tsx
```
### 詳細
- components/: UIコンポーネント、機能コンポーネント。
- hook/: カスタムフック（タスクの使用、API呼び出しの管理など）。
- model/: 型定義。
- routes/: Routing設定。
- styles/: GlobalCSSファイル。
- views/: 各ページやビューコンポーネントを配置。（Routing単位）

## 貢献
ご興味をお持ちいただきありがとうございます。

大変おこがましいですが...。
何かお気づきの点やご要望がございましたら、ぜひIssue起票・PullRequest等お待ちしています。
