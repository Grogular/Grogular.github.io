
        var hpFig;
        var dprFig;
        var combiFig;
        var CRoutput;

        function CRcalchp() {

            var numsof = document.getElementById("hpVal").value;

            switch (true) {
                case (numsof <= 0):
                    console.warn("WARNING: a monster's hp cannot start at 0 or less");
                    hpFig = 0;
                    break;
                case (1 <= numsof && numsof <= 6):
                    hpFig = 0;
                    break;
                case (7 <= numsof && numsof <= 35):
                    hpfig = 1;
                    break;
                case (36 <= numsof && numsof <= 49):
                    hpFig = 2;
                    break;
                case (50 <= numsof && numsof <= 70):
                    hpFig = 3;
                    break;
                case (71 <= numsof && numsof <= 85):
                    hpFig = 4;
                    break;
                case (86 <= numsof && numsof <= 100):
                    hpFig = 5;
                    break;
                case (101 <= numsof && numsof <= 115):
                    hpFig = 6;
                    break;
                case (116 <= numsof && numsof <= 130):
                    hpFig = 7;
                    break;
                case (131 <= numsof && numsof <= 145):
                    hpFig = 8;
                    break;
                case (146 <= numsof && numsof <= 160):
                    hpFig = 9;
                    break;
                case (161 <= numsof && numsof <= 175):
                    hpFig = 10;
                    break;
                case (176 <= numsof && numsof <= 190):
                    hpFig = 11;
                    break;
                case (191 <= numsof && numsof <= 205):
                    hpFig = 12;
                    break;
                case (206 <= numsof && numsof <= 220):
                    hpFig = 13;
                    break;
                case (221 <= numsof && numsof <= 235):
                    hpFig = 14;
                    break;
                case (236 <= numsof && numsof <= 250):
                    hpFig = 15;
                    break;
                case (251 <= numsof && numsof <= 265):
                    hpFig = 16;
                    break;
                case (266 <= numsof && numsof <= 280):
                    hpFig = 17;
                    break;
                case (281 <= numsof && numsof <= 295):
                    hpFig = 18;
                    break;
                case (296 <= numsof && numsof <= 310):
                    hpFig = 19;
                    break;
                case (311 <= numsof && numsof <= 325):
                    hpFig = 20;
                    break;
                case (326 <= numsof && numsof <= 340):
                    hpFig = 21;
                    break;
                case (341 <= numsof && numsof <= 355):
                    hpFig = 22;
                    break;
                case (356 <= numsof && numsof <= 400):
                    hpFig = 23;
                    break;
                case (401 <= numsof && numsof <= 445):
                    hpFig = 24;
                    break;
                case (446 <= numsof && numsof <= 490):
                    hpFig = 25;
                    break;
                case (491 <= numsof && numsof <= 535):
                    hpFig = 26;
                    break;
                case (536 <= numsof && numsof <= 580):
                    hpFig = 27;
                    break;
                case (581 <= numsof && numsof <= 625):
                    hpFig = 28;
                    break;
                case (626 <= numsof && numsof <= 670):
                    hpFig = 29;
                    break;
                case (671 <= numsof && numsof <= 715):
                    hpFig = 30;
                    break;
                case (716 <= numsof && numsof <= 760):
                    hpFig = 31;
                    break;
                case (761 <= numsof && numsof <= 805):
                    hpFig = 32;
                    break;
                case (806 <= numsof && numsof <= 850):
                    hpFig = 33;
                    break;
                default:
                    console.warn("WARNING: the monster's hp is over the recommened amount.");
                    hpFig = 33;
                    break;
            }

        }

        function CRcalcdpr() {
            var numsof = document.getElementById("dprVal").value;

            switch (true) {
                case (numsof < 0):
                    console.warn("WARNING: a monster cannot deal negative damage per round");
                    dprFig = 0;
                    break;
                case (0 <= numsof && numsof <= 1):
                    dprFig = 0;
                    break;
                case (2 <= numsof && numsof <= 3):
                    dprFig = 1;
                    break;
                case (4 <= numsof && numsof <= 5):
                    dprFig = 2;
                    break;
                case (6 <= numsof && numsof <= 8):
                    dprFig = 3;
                    break;
                case (9 <= numsof && numsof <= 14):
                    dprFig = 4;
                    break;
                case (15 <= numsof && numsof <= 20):
                    dprFig = 5;
                    break;
                case (21 <= numsof && numsof <= 26):
                    dprFig = 6;
                    break;
                case (27 <= numsof && numsof <= 32):
                    dprFig = 7;
                    break;
                case (33 <= numsof && numsof <= 38):
                    dprFig = 8;
                    break;
                case (39 <= numsof && numsof <= 44):
                    dprFig = 9;
                    break;
                case (45 <= numsof && numsof <= 50):
                    dprFig = 10;
                    break;
                case (51 <= numsof && numsof <= 56):
                    dprFig = 11;
                    break;
                case (57 <= numsof && numsof <= 62):
                    dprFig = 12;
                    break;
                case (63 <= numsof && numsof <= 68):
                    dprFig = 13;
                    break;
                case (69 <= numsof && numsof <= 74):
                    dprFig = 14;
                    break;
                case (75 <= numsof && numsof <= 80):
                    dprFig = 15;
                    break;
                case (81 <= numsof && numsof <= 86):
                    dprFig = 16;
                    break;
                case (87 <= numsof && numsof <= 92):
                    dprFig = 17;
                    break;
                case (93 <= numsof && numsof <= 98):
                    dprFig = 18;
                    break;
                case (99 <= numsof && numsof <= 104):
                    dprFig = 19;
                    break;
                case (105 <= numsof && numsof <= 110):
                    dprFig = 20;
                    break;
                case (111 <= numsof && numsof <= 116):
                    dprFig = 21;
                    break;
                case (117 <= numsof && numsof <= 122):
                    dprFig = 22;
                    break;
                case (123 <= numsof && numsof <= 140):
                    dprFig = 23;
                    break;
                case (141 <= numsof && numsof <= 158):
                    dprFig = 24;
                    break;
                case (159 <= numsof && numsof <= 176):
                    dprFig = 25;
                    break;
                case (177 <= numsof && numsof <= 194):
                    dprFig = 26;
                    break;
                case (195 <= numsof && numsof <= 212):
                    dprFig = 27;
                    break;
                case (213 <= numsof && numsof <= 230):
                    dprFig = 28;
                    break;
                case (231 <= numsof && numsof <= 248):
                    dprFig = 29;
                    break;
                case (249 <= numsof && numsof <= 266):
                    dprFig = 30;
                    break;
                case (267 <= numsof && numsof <= 284):
                    dprFig = 31;
                    break;
                case (285 <= numsof && numsof <= 302):
                    dprFig = 32;
                    break;
                case (303 <= numsof && numsof <= 320):
                    dprFig = 33;
                    break;
                default:
                    console.warn("WARNING: monster's damage per round is higher than recommended levels");
                    dprFig = 33;
                    break;
            }
        }

        function CRcalcAC() {
            var numsof = document.getElementById("acVal").value;
            var ACnum;

            switch (true) {
                case (0 <= hpFig && hpFig <= 6):
                    if (12 > numsof || numsof > 14) {
        ACnum = numsof - 13;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (hpFig == 7):
                    if (13 > numsof || numsof > 15) {
        ACnum = numsof - 14;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (8 <= hpFig && hpFig <= 10):
                    if (14 > numsof || numsof > 16) {
        ACnum = numsof - 15;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (11 <= hpFig && hpFig <= 12):
                    if (15 > numsof || numsof > 17) {
        ACnum = numsof - 16;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (13 <= hpFig && hpFig <= 15):
                    if (16 > numsof || numsof > 18) {
        ACnum = numsof - 17;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (16 <= hpFig && hpFig <= 19):
                    if (17 > numsof || numsof > 19) {
        ACnum = numsof - 18;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                case (20 <= hpFig):
                    if (18 > numsof || numsof > 20) {
        ACnum = numsof - 19;
    ACnum = ACnum / 2;
                        hpFig = hpFig + ACnum;
                    }
                    console.log("AC calculation successful!");
                    break;
                default:
                    console.warn("Something has gone wrong in the AC calculation")
                    break;
            }

        }

        function CRcalcATK() {
            var numsof = document.getElementById("atkVal").value;
            var ATKnum;

            switch (true) {
                case (0 <= dprFig && dprFig <= 5):
                    if (2 > numsof || numsof > 4) {
        ATKnum = numsof - 3;
    ATKnum = ATKnum / 2;
                        dprFig =dprFig + ATKnum;
                    }
                    break;
                case (dprFig == 6):
                    if (3 > numsof || numsof > 5) {
        ATKnum = numsof - 4;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (dprFig == 7):
                    if (4 > numsof || numsof > 6) {
        ATKnum = numsof - 5;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (8 <= dprFig && dprFig <= 10):
                    if (5 > numsof || numsof > 7) {
        ATKnum = numsof - 6;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (11 <= dprFig && dprFig <= 13):
                    if (6 > numsof || numsof > 8) {
        ATKnum = numsof - 7;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (14 <= dprFig && dprFig <= 18):
                    if (7 > numsof || numsof > 9) {
        ATKnum = numsof - 8;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (dprFig == 19):
                    if (8 > numsof || numsof > 10) {
        ATKnum = numsof - 9;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (20 <= dprFig && dprFig <= 23):
                    if (9 > numsof || numsof > 11) {
        ATKnum = numsof - 10;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (24 <= dprFig && dprFig <= 27):
                    if (10 > numsof || numsof > 12) {
        ATKnum = numsof - 11;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (28 <= dprFig && dprFig <= 29):
                    if (11 > numsof || numsof > 13) {
        ATKnum = numsof - 12;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (30 <= dprFig && dprFig <= 31):
                    if (12 > numsof || numsof > 14) {
        ATKnum = numsof - 13;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                case (32 <= dprFig):
                    if (13 > numsof || numsof > 15) {
        ATKnum = numsof - 14;
    ATKnum = ATKnum / 2;
                        dprFig = dprFig + ATKnum;
                    }
                    break;
                default:
                    console.warn("Something has gone wrong in Attack bonus calculation.");
                    break;

            }
        }

        function CRcalcSTH() {
            var numsof = document.getElementById("atkVal").value;
            var STHnum;
            switch (true) {
                case (0 <= dprFig && dprFig <= 6):
                    if (12 > numsof || numsof > 14) {
        STHnum = numsof - 13;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (dprFig == 7):
                    if (13 > numsof || numsof > 15) {
        STHnum = numsof - 14;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (8 <= dprFig && dprFig <= 10):
                    if (14 > numsof || numsof > 16) {
        STHnum = numsof - 15;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (11 <= dprFig && dprFig <= 13):
                    if (15 > numsof || numsof > 17) {
        STHnum = numsof - 16;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (dprFig == 14):
                    if (16 > numsof || numsof > 18) {
        STHnum = numsof - 17;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (15 <= dprFig && dprFig <= 19):
                    if (17 > numsof || numsof > 19) {
        STHnum = numsof - 18;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (20 <= dprFig && dprFig <= 23):
                    if (18 > numsof || numsof > 20) {
        STHnum = numsof - 19;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (24 <= dprFig && dprFig <= 26):
                    if (19 > numsof || numsof > 21) {
        STHnum = numsof - 20;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (27 <= dprFig && dprFig <= 29):
                    if (20 > numsof || numsof > 22) {
        STHnum = numsof - 21;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (30 <= dprFig && dprFig <= 32):
                    if (21 > numsof || numsof > 23) {
        STHnum = numsof - 22;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
                case (33 <= dprFig):
                    if (22 > numsof || numsof > 24) {
        STHnum = numsof - 23;
    STHnum = STHnum / 2;
                        dprFig = dprFig + STHnum;
                    }
                    console.log("Saving throw calculation successful!");
                    break;
            }
        }

        function calcCR()
        {
            switch (true) {
                case (combiFig < 0):
                    CRoutput = "The monster is CR 0 (WARNING: the CR calculated was below 0)";
                    break;
                case (combiFig == 0):
                    CRoutput = "The monster is CR 0";
                    break;
                case (combiFig == 1 || combiFig == 2):
                    CRoutput = "The monster is CR 1/8";
                    break;
                case (combiFig == 3 || combiFig == 4):
                    CRoutput = "The monster is CR 1/4";
                    break;
                case (combiFig == 5 || combiFig == 6):
                    CRoutput = "The monster is CR 1/2";
                    break;
                case (combiFig == 7 || combiFig == 8):
                    CRoutput = "The monster is CR 1";
                    break;
                case (combiFig == 9 || combiFig == 10):
                    CRoutput = "The monster is CR 2";
                    break;
                case (combiFig == 11 || combiFig == 12):
                    CRoutput = "The monster is CR 3";
                    break;
                case (combiFig == 13 || combiFig == 14):
                    CRoutput = "The monster is CR 4";
                    break;
                case (combiFig == 15 || combiFig == 16):
                    CRoutput = "The monster is CR 5";
                    break;
                case (combiFig == 17 || combiFig == 18):
                    CRoutput = "The monster is CR 6";
                    break;
                case (combiFig == 19 || combiFig == 20):
                    CRoutput = "The monster is CR 7";
                    break;
                case (combiFig == 21 || combiFig == 22):
                    CRoutput = "The monster is CR 8";
                    break;
                case (combiFig == 23 || combiFig == 24):
                    CRoutput = "The monster is CR 9";
                    break;
                case (combiFig == 25 || combiFig == 26):
                    CRoutput = "The monster is CR 10";
                    break;
                case (combiFig == 27 || combiFig == 28):
                    CRoutput = "The monster is CR 11";
                    break;
                case (combiFig == 29 || combiFig == 30):
                    CRoutput = "The monster is CR 12";
                    break;
                case (combiFig == 31 || combiFig == 32):
                    CRoutput = "The monster is CR 13";
                    break;
                case (combiFig == 33 || combiFig == 34):
                    CRoutput = "The monster is CR 14";
                    break;
                case (combiFig == 35 || combiFig == 36):
                    CRoutput = "The monster is CR 15";
                    break;
                case (combiFig == 37 || combiFig == 38):
                    CRoutput = "The monster is CR 16";
                    break;
                case (combiFig == 39 || combiFig == 40):
                    CRoutput = "The monster is CR 17";
                    break;
                case (combiFig == 41 || combiFig == 42):
                    CRoutput = "The monster is CR 18";
                    break;
                case (combiFig == 43 || combiFig == 44):
                    CRoutput = "The monster is CR 19";
                    break;
                case (combiFig == 45 || combiFig == 46):
                    CRoutput = "The monster is CR 20";
                    break;
                case (combiFig == 47 || combiFig == 48):
                    CRoutput = "The monster is CR 21";
                    break;
                case (combiFig == 49 || combiFig == 50):
                    CRoutput = "The monster is CR 22";
                    break;
                case (combiFig == 51 || combiFig == 52):
                    CRoutput = "The monster is CR 23";
                    break;
                case (combiFig == 53 || combiFig == 54):
                    CRoutput = "The monster is CR 24";
                    break;
                case (combiFig == 55 || combiFig == 56):
                    CRoutput = "The monster is CR 25";
                    break;
                case (combiFig == 57 || combiFig == 58):
                    CRoutput = "The monster is CR 26";
                    break;
                case (combiFig == 59 || combiFig == 60):
                    CRoutput = "The monster is CR 27";
                    break;
                case (combiFig == 61 || combiFig == 62):
                    CRoutput = "The monster is CR 28";
                    break;
                case (combiFig == 63 || combiFig == 64):
                    CRoutput = "The monster is CR 29";
                    break;
                case (combiFig == 65 || combiFig == 66):
                    CRoutput = "The monster is CR 30";
                    break;
                case (combiFig > 66):
                    CRoutput = "The monster is CR 30 (WARNING: the CR calculated was above 30)";
                    break;
                default:
                    CRoutput = "Something has gone wrong while calculating CR";
                    break;

            }

        }


        function finalButton() {
        CRcalchp();
    CRcalcdpr();
            CRcalcAC();
            var atkUsing = document.getElementById("atkMethod").value;
            switch (atkUsing) {
                case ("Atk"):
                    console.log("The attack bonus was used");
                    CRcalcATK();
                    break;
                case ("Sth"):
                    console.log("The Saving throw was used");
                    CRcalcSTH();
                    break;
                default:
                    console.warn("Unexpected error")
                    break;

            }
            combiFig = Math.floor(dprFig) + Math.floor(hpFig);
            calcCR();
            document.getElementById("finalFig").innerHTML = CRoutput;

        }