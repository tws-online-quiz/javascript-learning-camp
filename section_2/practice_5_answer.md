- 根据注释要求，分别在相应的位置添加如下两段代码：
- 1.第一段

        if(all_scores[stu_name][0] > all_scores[stu_name][1])
        {
            highest_score = all_scores[stu_name][0];
        }
        else
        {
            highest_score = all_scores[stu_name][1];
        }

- 2.第二段

        if(highest_score < all_scores[stu_name][2])
        {
            highest_score = all_scores[stu_name][2];
        }