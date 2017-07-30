
$(function () {
    $('form#formid').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: '../mail/contact_me.php',
        data: $('form#formid').serialize(),
        success: function () {

          $("#sendmessagebtm").show().delay(4000).fadeOut();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

          $("#errormessagebtm").show().delay(4000).fadeOut();
        }
      });
    });

    $('form#contact').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: '../mail/contact_me.php',
        data: $('form#contact').serialize(),
        success: function () {

          $("#sendmessagetop").show().delay(4000).fadeOut();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

          $("#errormessagetop").show().delay(4000).fadeOut();
        }
      });
    });

    $('form#contact1').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        type: 'post',
        url: '../mail/contact_me.php',
        data: $('form#contact1').serialize(),
        success: function () {

          $("#sendmessagetop1").show().delay(4000).fadeOut();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

          $("#errormessagetop1").show().delay(4000).fadeOut();
        }
      });
    });
});
