var domains = [
  /* Default domains included */
  "gmail.com", "hotmail.com", "yahoo.com"
  ]

function valid(){
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    function validate() {
      $("#result").text("");
      var email = $("#email").val()
      if (validateEmail(email)) {
        $("#result").text(email + " is valid.");
        $("#result").css("color", "green");
      } else {
        $("#result").text(email + " is not valid.");
        $("#result").css("color", "red");
      }
      return false;
    }
    
    $("form").bind("submit", validate);
}

// Sift4 - simplest version
// online algorithm to compute the distance between two strings in O(n)
// maxOffset is the number of characters to search for matching letters
function sift4(s1, s2, maxOffset) {
    if (!s1||!s1.length) {
        if (!s2) {
            return 0;
        }
        return s2.length;
    }

    if (!s2||!s2.length) {
        return s1.length;
    }

    var l1=s1.length;
    var l2=s2.length;

    var c1 = 0;  //cursor for string 1
    var c2 = 0;  //cursor for string 2
    var lcss = 0;  //largest common subsequence
    var local_cs = 0; //local common substring

    while ((c1 < l1) && (c2 < l2)) {
        if (s1.charAt(c1) == s2.charAt(c2)) {
            local_cs++;
        } else {
            lcss+=local_cs;
            local_cs=0;
            if (c1!=c2) {
                c1=c2=Math.max(c1,c2); //using max to bypass the need for computer transpositions ('ab' vs 'ba')
            }
            for (var i = 0; i < maxOffset && (c1+i<l1 || c2+i<l2); i++) {
                if ((c1 + i < l1) && (s1.charAt(c1 + i) == s2.charAt(c2))) {
                    c1+= i;
                    local_cs++;
                    break;
                }
                if ((c2 + i < l2) && (s1.charAt(c1) == s2.charAt(c2 + i))) {
                    c2+= i;
                    local_cs++;
                    break;
                }
            }
        }
        c1++;
        c2++;
    }
    lcss+=local_cs;
    return Math.round(Math.max(l1,l2)- lcss);
}

