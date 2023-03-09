(async () => {
  s = await prompt();
  console.log(s);
  n = Number(s);
  temp = n;
  n = math.abs(n);
  cnt = 0;
  while (n > 0) {
    cnt++;
    n = Number.parselnt(n / 10);
  }
  res = cnt;
  res += "<br><br>";
  document.writeln("No of digits in given Number<br>");
  document.writeln(res);
})();
