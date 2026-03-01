# 🚀 PORTFOLIO 2026 ![Build Status](https://github.com/Whitesujin/portfolio/actions/workflows/deploy.yml/badge.svg)

> **Brutalist Concept Web Publisher Portfolio**
> "불필요한 장식을 덜어내고 본질에 집중하는 퍼블리싱을 지향합니다."

---

## 🔗 Live Demo
<a href="https://whitesujin.github.io/portfolio/" target="_blank">https://whitesujin.github.io/portfolio/</a>

---

## 🛠 Tech Stacks
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=Sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232088FF.svg?style=for-the-badge&logo=githubactions&logoColor=white)

| 분류 | 사용 기술 |
|------|-----------|
| Markup | HTML5 (Semantic Markup) |
| Style | SCSS (Variables, Nesting, Mixins) |
| Script | Vanilla JavaScript (ES6+) |
| Build Tool | Vite |
| CI/CD | GitHub Actions |

---

## 📂 Key Features
- **Dynamic Popup:** 별도의 HTML 파일 없이 JS 객체(`projectData`)를 활용한 데이터 동적 렌더링 팝업 구현.
- **Common Partials** — `fetch` 기반 header/footer 공통 컴포넌트 분리 및 재사용
- **Auto Deployment** — `main` 브랜치 푸시 시 GitHub Actions 자동 배포
- **Brutalism UI:** 굵은 선과 강렬한 대비를 활용한 독창적인 디자인 시스템 구축.

## 📁 Project Structure
```text
portfolio/
├── partials/            # 공통 컴포넌트 (header, footer)
├── pages/               # 메인 및 서브 페이지
├── src/
│   ├── images/          # 이미지 및 아이콘
│   ├── scss/            # SCSS 스타일 시트 (모듈화 관리)
│   └── js/              # 스크립트 및 데이터 객체
└── index.html           # 인트로 페이지
```