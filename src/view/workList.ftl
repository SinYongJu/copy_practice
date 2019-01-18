<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>WORK LIST</title>
  <style>
    *{margin:0;padding:0}
    strong,a{display:block;font-size:15px}
    body{background-color:#efefef}
    .wrapper{width: 300px;margin:50px auto 0;background-color:#fff}
  </style>
</head>
<body>
  <div class="wrapper">
    <ul>
      <#assign types = [ "app","mo", "pc"] />
      <#list workList as work>
        <li>
          <strong style="display:block">${work}</strong>
          <#list types as type>
            <a href="${host}/${work}/${type}">${work}/${type}</a>
          </#list>
        </li>
      </#list>
    </ul>
  </div>
</body>
</html>