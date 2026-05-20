# 📐 小学数学练习

为提高小学生数学成绩而设计的 HTML 测试页面集合。

## 项目结构

每个测试独立一个文件夹，直接打开 `index.html` 即可使用。

```
exam/
├── index.html               # 首页导航
├── css/style.css             # 共享样式
├── js/common.js              # 共享工具函数
├── 01-error-solving/         # 错中求解
│   └── index.html
├── 02-arithmetic/            # 四则运算
│   └── index.html
└── README.md
```

## 现有测试

| 测试 | 说明 |
|------|------|
| 错中求解 | 根据错误过程推算正确结果，5 道加法题，每题 20 分 |
| 四则运算 | 加减乘除整数运算，支持打印出题与交互测试两种模式 |

## 添加新测试

1. 新建文件夹，命名格式 `NN-name/`
2. 创建 `index.html`
3. 在 `index.html` 的 `tests` 数组里添加一条记录即可
