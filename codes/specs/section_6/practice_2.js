describe('practice-6-2', function () {

    it("use get_product_of_two_num(3,5) is 15 ", function () {
        var stu_scores = [{name:'王雪雪',chinese:131,math:136,english:144},
            {name:'杨璐璐',chinese:131,math:129,english:144},
            {name:'韩林霖',chinese:126,math:139,english:142},
            {name:'沙龙逸',chinese:124,math:148,english:136}];
        print_stu_scores(stu_scores);
        expect(logs[0]).toBe("下面是某班部分学生的成绩：\n王雪雪\t语文：131，数学：136，英语：144\n杨璐璐\t语文：131，数学：129，英语：144\n韩林霖\t语文：126，数学：139，英语：142\n沙龙逸\t语文：124，数学：148，英语：136");
        expect(logs[1]).toBe(undefined);
    });

});




