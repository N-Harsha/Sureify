res = 0;
i = 0;
while (i <= 50) {
  res += i;
  i += 2;
}
res += "<br><br>";
document.writeln("sum of all even numbers from 1 to 50 using while loop.<br>");
document.writeln(res);
