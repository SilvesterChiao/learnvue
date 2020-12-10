# 模板语法

## 插值

```javascript
<span>Message: {{ msg }}</span>
<span v-once>这个将不会改变: {{ msg }}</span>
<span v-html="rawHtml"></span>
```

## 特性

```javascript
<div v-bind:id="dynamicId"></div>
```
