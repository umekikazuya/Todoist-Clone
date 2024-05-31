# Todoist Clone App

## アプリについて
Firebaseを活用したTodoistのCloneアプリケーションです。

本家と加えるとかなり簡素ではありますが、ディレクトリ構成やComponents設計等参考いただけますと幸いです。

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

### 非機能要件
- RoutingSystem
[ReactRouter](https://reactrouter.com/en/main)にて構築。
- スタイル
[StyledComponents](https://styled-components.com/)にて構築。

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
