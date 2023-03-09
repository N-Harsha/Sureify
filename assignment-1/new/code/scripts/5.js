res = 0;
i = 1;
while (i <= 50) {
  res += i;
  i += 2;
}
res += "<br><br>";
document.writeln("Sum of All Odd numbers from 1 to 50 using while loop<br>");
document.writeln(res);
