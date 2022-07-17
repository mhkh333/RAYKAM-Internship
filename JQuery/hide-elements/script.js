$(document).ready(function () {
  $('#btn1').click(function () {
    $("section p ~ p:first").hide();
  });

  $('#btn2').click(function () {
    $('span.my-span').hide();
  });

  $('#btn3').click(function () {
    $('input[type="email"]').hide();
  });

  $('#btn4').click(function () {
    $('input:checked').hide();

  });

  $('#btn5').click(function () {
    $('div#my-div div span:first').hide();
  });
});
