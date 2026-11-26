/* Bài úp mở mỗi ngày – trang Năng Lượng Số.
   Mỗi ngày tự hiện 1 bài (xoay vòng 30 bài, tính theo giờ Việt Nam, bắt đầu 24/11/2026).
   Thêm bài mới: thêm 1 phần tử vào mảng BAI. pk phải trùng data-pk của gói trong #goi-xem. */
(function () {
  var BAI = [
    {t:"Số Chủ Đạo 1: sinh ra để dẫn đầu, nhưng hay mệt vì gánh hết",
     p:["Người Số Chủ Đạo 1 thường là người nghĩ ra việc trước, làm trước, chịu trách nhiệm trước. Ở nhà, ở chỗ làm, ai cũng quen hỏi \"giờ tính sao\" với họ.",
        "Điểm mạnh là quyết nhanh, dám chịu. Điểm dễ vấp là ôm hết vào mình, khó nhờ ai, rồi tự thấy cô đơn giữa đám đông.",
        "Nhưng Số Chủ Đạo chỉ là 1 trong 6 chỉ số. Cùng là số 1, người có Số Linh Hồn 2 sẽ mềm hơn hẳn người có Linh Hồn 8."],
     u:"Bạn là số 1 kiểu nào: người tiên phong được nể, hay người gánh vác mà không ai hiểu? Câu trả lời nằm ở 5 chỉ số còn lại.",
     g:"Tự Xem Đầy Đủ",gia:"68.000đ",pk:"go99"},
    {t:"Cùng ngày sinh mà tính khác nhau? Bí mật nằm ở cái tên",
     p:["Hai người sinh cùng ngày, cùng Số Chủ Đạo, mà một người sôi nổi, một người trầm lặng. Nhiều người nghĩ vậy là thần số học sai.",
        "Thật ra theo Pythagoras, họ tên khai sinh cho ra 3 chỉ số rất quan trọng: Số Sứ Mệnh (cả tên), Số Linh Hồn (nguyên âm) và Số Nhân Cách (phụ âm).",
        "Đổi một chữ trong tên là các con số này đổi theo. Đó là lý do cô Thảo luôn hỏi đúng tên trên giấy khai sinh."],
     u:"Tên của bạn đang nói gì về điều bạn khao khát nhất? Có người đọc xong Số Linh Hồn mới hiểu vì sao mình hay buồn vô cớ.",
     g:"Bản Đồ Năng Lượng",gia:"199.000đ",pk:"199000|BANDO"},
    {t:"Số điện thoại có cặp \"Tuyệt Mệnh\" thì sao?",
     p:["Theo Bát Cực Linh Số, mỗi dãy số được tách thành từng cặp liền nhau. Các cặp 12, 21, 69, 96, 48, 84, 37, 73 thuộc nhóm Tuyệt Mệnh, một trong 4 nhóm cần lưu ý.",
        "Có cặp xấu chưa chắc đã phải đổi số. Còn tùy cặp đó đứng ở đầu hay cuối, có cặp tốt nào đỡ bên cạnh, và có hợp ngày sinh của bạn không.",
        "Bạn có thể tự tách cặp ngay ở mục \"Các loại số\" ngay trên trang này."],
     u:"Tách cặp thì dễ, đọc ra nên giữ hay nên đổi mới khó. Nhiều người đổi số tốn cả triệu mà số mới còn kém hơn số cũ.",
     g:"Xem 1 Số",gia:"149.000đ",pk:"149000|SODEP"},
    {t:"Năm 2027 của bạn là năm gieo hạt hay năm gặt hái?",
     p:["Năm Cá Nhân tính bằng ngày sinh + tháng sinh + năm đang xét. Ví dụ sinh ngày 15 tháng 8, năm 2027: 1+5+8+2+0+2+7 = 25, rồi 2+5 = 7. Năm 2027 là năm cá nhân số 7.",
        "Mỗi người đi một vòng 9 năm. Năm 1 hợp bắt đầu việc mới, năm 9 hợp dọn dẹp và kết thúc. Làm ngược nhịp thì rất dễ mệt mà không ra kết quả.",
        "Bạn thử tự tính năm 2027 của mình xem ra số mấy."],
     u:"Biết số năm mới chỉ là bước đầu. Tháng nào nên tiến, tháng nào nên giữ tiền, tháng nào cẩn thận chuyện tình cảm thì phải xem đủ 12 tháng.",
     g:"Năm Cá Nhân 2027",gia:"149.000đ",pk:"149000|NAM2027"},
    {t:"Con hay cãi lời, có khi không phải do con hư",
     p:["Có những bé càng la càng lì, có bé chỉ cần nói nhẹ là nghe. Ba mẹ hay nghĩ do tính con, nhưng nhiều khi là do mình chưa nói đúng \"ngôn ngữ\" của con.",
        "Bé có nhiều số 1 trong biểu đồ ngày sinh thường cần được tự quyết. Bé thiếu số 5 thường sợ thay đổi, ép nhanh là khóc.",
        "Hiểu con số của con giúp ba mẹ bớt so sánh con mình với con nhà người ta."],
     u:"Con bạn hợp được khen kiểu nào, học kiểu nào thì vào, năng khiếu nào đang bị bỏ quên? Cô Thảo viết riêng cho từng bé.",
     g:"Thấu Hiểu Con Yêu",gia:"399.000đ",pk:"399000|CONYEU"},
    {t:"Vợ số 4, chồng số 5: một người thích chắc chắn, một người thích tự do",
     p:["Số 4 thích kế hoạch, thích để dành, ghét bất ngờ. Số 5 thích đi, thích thử, ngồi yên là bứt rứt. Ở chung, chuyện nhỏ như đi chơi cuối tuần cũng thành cãi nhau.",
        "Không có cặp số nào hoàn toàn hợp hay hoàn toàn khắc. Cặp lệch nhau lại bù cho nhau rất tốt, nếu mỗi người hiểu người kia cần gì.",
        "Thần số học giúp hai người nhìn nhau bằng con mắt khác: không phải anh ấy vô tâm, mà là anh ấy khác mình."],
     u:"Hai bạn đang lệch nhau ở chỉ số nào, và câu nào nên nói, câu nào nên tránh? Mỗi người nhận 1 file riêng.",
     g:"Năng Lượng Tình Yêu",gia:"499.000đ",pk:"499000|TINHYEU"},
    {t:"Có nên nghỉ việc ra làm riêng? Con số có câu trả lời",
     p:["Người có số 1 và số 8 nổi bật thường hợp tự làm chủ. Người mạnh số 2, số 6 lại làm tốt nhất khi có đồng đội và có người dẫn dắt.",
        "Không hợp làm chủ không có nghĩa là kém. Có người làm thuê đúng chỗ còn giàu hơn người mở tiệm sai thời điểm.",
        "Thời điểm cũng quan trọng không kém. Năm cá nhân số 1 và số 8 thường là năm thuận để bứt ra."],
     u:"Bạn hợp làm chủ, làm thuê hay làm chung? 3 nhóm nghề hợp nhất với bạn là gì, và năm nào nên chuyển hướng?",
     g:"Làm Chủ Hay Làm Thuê",gia:"299.000đ",pk:"299000|LAMCHU"},
    {t:"Số căn cước có cặp xấu, đổi không được thì làm gì?",
     p:["Số căn cước đi theo mình cả đời, không đổi được. Nhiều người xem ra có cặp Ngũ Quỷ, Lục Sát rồi lo lắng.",
        "Theo Bát Cực Linh Số, cách hay dùng là chọn số điện thoại và số tài khoản ngân hàng mình dùng hằng ngày sao cho có cặp tốt bù lại.",
        "Bạn chỉ cần gửi dãy số, không cần gửi ảnh căn cước."],
     u:"Cặp xấu nào trong căn cước của bạn cần bù, và nên chọn số điện thoại, số tài khoản có cặp gì? Cô Thảo chọn sẵn 3 số cho bạn.",
     g:"Combo Đổi Đời",gia:"999.000đ",pk:"999000|DOIDOI"},
    {t:"Ra số 11, 22, 33: đừng cộng tiếp!",
     p:["Khi cộng ngày sinh mà ra 11, 22 hay 33, theo Pythagoras mình giữ nguyên, không cộng thành 2, 4, 6. Đó là 3 số bậc thầy.",
        "Người mang số bậc thầy thường có trực giác mạnh, sống có lý tưởng, nhưng áp lực cũng lớn gấp đôi. Nhiều người tuổi trẻ lận đận rồi mới bừng lên.",
        "Nếu bạn ra số bậc thầy, rất nên xem kỹ các giai đoạn trong đời."],
     u:"Số bậc thầy của bạn đang được dùng hay đang bị đè nén? Đỉnh cao của bạn rơi vào tuổi nào?",
     g:"Giải Mã Chuyên Sâu",gia:"599.000đ",pk:"599000|CHUYENSAU"},
    {t:"Biểu đồ ngày sinh có ô trống: bài học bạn cần bồi đắp",
     p:["Xếp các chữ số trong ngày sinh vào bảng 3x3, ô có số là năng lượng bạn sẵn có, ô trống là chỗ cần rèn thêm.",
        "Ví dụ thiếu số 3 hay khó diễn đạt cảm xúc, thiếu số 7 hay phải học qua va vấp. Đủ 3 ô thẳng hàng thì có \"mũi tên\" sức mạnh.",
        "Bạn tự vẽ được biểu đồ của mình, nhưng đọc ra ý nghĩa thì cần đối chiếu cả bảng."],
     u:"Biểu đồ của bạn có mũi tên nào, thiếu ô nào? Nhập ngày sinh ở trên, mở khóa là thấy ngay.",
     g:"Tự Xem Đầy Đủ",gia:"68.000đ",pk:"go99"},
    {t:"Biển số xe có cặp Ngũ Quỷ, có nên bấm lại?",
     p:["Các cặp 18, 81, 79, 97, 36, 63, 24, 42 thuộc nhóm Ngũ Quỷ theo Bát Cực Linh Số. Nhiều người thấy biển số có cặp này là muốn đổi xe.",
        "Khoan đã. Một biển số có nhiều cặp, cặp tốt có thể lấn át cặp xấu. Và biển số còn phải đặt cạnh số điện thoại, ngày sinh của chủ xe.",
        "Tự tách cặp ngay ở mục \"Các loại số\" trên trang này."],
     u:"Biển số của bạn đang giúp hay đang cản? Nên giữ, nên hóa giải hay nên đổi?",
     g:"Xem 1 Số",gia:"149.000đ",pk:"149000|SODEP"},
    {t:"Đặt tên con: một chữ cái đổi cả bộ số",
     p:["Theo Pythagoras, mỗi chữ cái ứng với một số: A, J, S là 1; B, K, T là 2... Cả họ tên cộng lại ra Số Sứ Mệnh của bé.",
        "Nhiều ba mẹ chọn tên vì nghe hay, xong mới biết tên đó cho Số Sứ Mệnh xung với Số Chủ Đạo của con.",
        "Chọn tên một lần, con mang cả đời, nên đáng bỏ chút thời gian."],
     u:"3 đến 5 cái tên hợp năng lượng nhất với ngày sinh của bé là gì? Cô Thảo đề xuất và giải thích từng tên.",
     g:"Đặt Tên & Chọn Số",gia:"699.000đ",pk:"699000|DATTEN"},
    {t:"Số tài khoản ngân hàng cũng có năng lượng",
     p:["Ngày nào bạn cũng đọc số tài khoản cho người khác chuyển tiền. Theo Bát Cực Linh Số, dãy số dùng càng nhiều thì càng nên có cặp tốt.",
        "Các cặp Sinh Khí (14, 41, 67, 76, 39, 93, 28, 82) và Thiên Y (13, 31, 68, 86, 49, 94, 27, 72) hay được chọn cho số tài khoản.",
        "Nhiều ngân hàng giờ cho chọn số tài khoản theo ý, có nơi miễn phí."],
     u:"Số tài khoản bạn đang dùng có cặp nào cần lưu ý? Nếu mở mới thì nên chọn dãy nào hợp ngày sinh của bạn?",
     g:"Xem 1 Số",gia:"149.000đ",pk:"149000|SODEP"},
    {t:"Mẹ số 8, con số 3: mẹ muốn kỷ luật, con muốn vui",
     p:["Mẹ số 8 quen quản lý, làm gì cũng muốn có kết quả. Con số 3 sống bằng cảm xúc, thích vẽ, thích nói, học kiểu ép là tắt ngay.",
        "Hai mẹ con thương nhau nhưng hay \"lệch sóng\": mẹ thấy con lười, con thấy mẹ khó.",
        "Hiểu con số của cả hai, mẹ biết lúc nào nên nghiêm, lúc nào nên chơi cùng con."],
     u:"Mẹ và con bạn hợp nhau ở đâu, dễ va chạm ở đâu, nói câu nào thì con chịu nghe?",
     g:"Năng Lượng 2 Mẹ Con",gia:"499.000đ",pk:"499000|MECON"},
    {t:"4 đỉnh cao cuộc đời: bạn đang ở chặng nào?",
     p:["Thần số học chia đời người thành 4 chặng lớn, mỗi chặng có một con số làm chủ đề. Tuổi bắt đầu mỗi chặng tính từ Số Chủ Đạo.",
        "Có người 35 tuổi mới vào chặng thuận, có người chặng đẹp nhất lại ở tuổi 50. Biết trước thì đỡ sốt ruột, đỡ so mình với người khác.",
        "Đi kèm 4 đỉnh cao là 4 thử thách, những bài học cứ lặp lại cho tới khi mình vượt qua."],
     u:"Đỉnh cao của bạn rơi vào tuổi nào, chủ đề là tiền bạc, gia đình hay sự nghiệp? Những năm nào cần giữ gìn?",
     g:"Luận Giải Trọn Đời",gia:"2.999.000đ",pk:"2999000|TRONDOI"},
    {t:"Số Chủ Đạo 7: người hay một mình nhưng không hề cô đơn",
     p:["Số 7 thích tìm hiểu tận gốc, không tin điều gì chỉ vì người khác nói. Họ cần thời gian ở một mình để nghĩ.",
        "Người xung quanh hay hiểu lầm số 7 là lạnh lùng. Thật ra họ chỉ chọn rất kỹ người để tin.",
        "Số 7 hợp nghề nghiên cứu, chuyên môn sâu, và thường giỏi lên rất nhanh khi tìm đúng lĩnh vực."],
     u:"Bạn là số 7 đang dùng trí tuệ đúng chỗ, hay đang tự cô lập mình? Linh Hồn và Nhân Cách của bạn sẽ nói rõ.",
     g:"Tự Xem Đầy Đủ",gia:"68.000đ",pk:"go99"},
    {t:"Ấn tượng đầu tiên người ta có về bạn đến từ đâu?",
     p:["Số Nhân Cách tính từ các phụ âm trong họ tên. Nó cho biết người lạ nhìn bạn lần đầu sẽ thấy gì: đáng tin, vui vẻ, sắc sảo hay khó gần.",
        "Có người bên trong rất tình cảm (Linh Hồn số 6) mà bên ngoài trông nghiêm (Nhân Cách số 8), nên hay bị hiểu lầm.",
        "Biết điều này giúp bạn chủ động hơn khi đi phỏng vấn, gặp khách, ra mắt nhà chồng."],
     u:"Bên trong và bên ngoài của bạn đang khớp hay đang lệch nhau? Lệch ở đâu thì nên làm gì?",
     g:"Bản Đồ Năng Lượng",gia:"199.000đ",pk:"199000|BANDO"},
    {t:"Chọn ngày khai trương theo con số",
     p:["Ngoài xem ngày theo lịch âm, nhiều người chọn ngày khai trương hợp với Năm Cá Nhân và Số Chủ Đạo của chủ tiệm.",
        "Mở tiệm vào năm cá nhân số 1 hoặc số 8 thường thuận, còn năm số 7 hợp học hỏi, chuẩn bị hơn là bung lớn.",
        "Tên tiệm và số điện thoại cửa hàng cũng nên hợp với chủ."],
     u:"Ngày nào trong năm tới hợp nhất để bạn khai trương, ký hợp đồng? Tên và số điện thoại cửa hàng đã ổn chưa?",
     g:"Trọn Bộ Năng Lượng Số",gia:"1.999.000đ",pk:"1999000|TRONBO"},
    {t:"Năm cá nhân số 9: năm buông bỏ để đón cái mới",
     p:["Năm số 9 là năm cuối của vòng 9 năm. Hay có chuyện kết thúc: đổi chỗ làm, chia tay, dọn nhà, cắt mối quan hệ cũ.",
        "Nhiều người năm số 9 cố bắt đầu việc lớn rồi vấp. Thật ra năm này hợp dọn dẹp, trả nợ, khép lại cho gọn.",
        "Qua năm số 1 kế tiếp, mọi thứ mở ra nhẹ nhàng hơn hẳn."],
     u:"2027 có phải năm số 9 của bạn không? Nếu đúng thì nên buông chuyện gì, giữ chuyện gì?",
     g:"Năm Cá Nhân 2027",gia:"149.000đ",pk:"149000|NAM2027"},
    {t:"Người số 6: thương gia đình nhất, cũng dễ mệt nhất",
     p:["Số 6 là người lo cho cả nhà, ai cần là có mặt. Họ hạnh phúc khi người thân vui.",
        "Mặt trái là hay quên bản thân, rồi tủi thân vì không ai lo lại cho mình. Trong tình yêu, số 6 dễ hy sinh quá mức.",
        "Người bạn đời hiểu số 6 sẽ biết một lời cảm ơn có giá trị thế nào với họ."],
     u:"Nửa kia của bạn đang cần được yêu theo cách nào? Hai bạn hợp ở đâu, cần nhường nhau ở đâu?",
     g:"Năng Lượng Tình Yêu",gia:"499.000đ",pk:"499000|TINHYEU"},
    {t:"Tháng nào nên tiến, tháng nào nên giữ tiền?",
     p:["Trong mỗi năm cá nhân lại có 12 tháng cá nhân, mỗi tháng một con số. Có tháng hợp ký kết, có tháng nên ngồi yên.",
        "Người làm ăn hay dùng tháng cá nhân để chọn lúc nhập hàng, chạy quảng cáo, hay mở chi nhánh.",
        "Đây là phần nhiều chủ tiệm thấy hữu ích nhất khi lên kế hoạch cả năm."],
     u:"12 tháng tới của bạn: tháng nào đẩy mạnh, tháng nào cẩn thận chuyện tiền? Kèm gợi ý ngày tốt trong năm.",
     g:"Trọn Bộ Năng Lượng Số",gia:"1.999.000đ",pk:"1999000|TRONBO"},
    {t:"Số điện thoại có Sinh Khí, Thiên Y: vì sao được săn?",
     p:["Trong Bát Cực Linh Số, 4 nhóm cát là Thiên Y, Sinh Khí, Diên Niên, Phục Vị. Số điện thoại nhiều cặp cát thường được gọi là số đẹp.",
        "Nhưng số đẹp với người này chưa chắc hợp người kia. Cặp cát phải đứng đúng chỗ và hợp ngày sinh của người dùng.",
        "Trước khi bỏ tiền mua số đẹp, nên xem kỹ số đó có hợp mình không."],
     u:"Số bạn đang dùng có mấy cặp cát, mấy cặp cần lưu ý? Nếu đổi thì nên chọn đuôi số nào?",
     g:"Xem 1 Số",gia:"149.000đ",pk:"149000|SODEP"},
    {t:"Có những bài học cứ lặp lại hoài: đó là \"thử thách\" của bạn",
     p:["Có người lần nào làm ăn chung cũng bị lừa, có người yêu ai cũng gặp kiểu người giống nhau. Thần số học gọi đó là các con số thử thách.",
        "Mỗi người có 4 thử thách, tính từ ngày sinh. Hiểu thử thách của mình, mình biết né và biết rút kinh nghiệm nhanh hơn.",
        "Đây là phần nhiều người đọc xong thấy nhẹ lòng nhất."],
     u:"Bài học lặp lại của bạn là gì, và bạn sẽ vượt qua nó ở tuổi nào?",
     g:"Giải Mã Chuyên Sâu",gia:"599.000đ",pk:"599000|CHUYENSAU"},
    {t:"Tên thương hiệu có hợp với chủ?",
     p:["Tên quán, tên shop, tên công ty cũng quy ra số theo Pythagoras được, giống tên người.",
        "Tên thương hiệu hợp với Số Chủ Đạo của chủ thì làm gì cũng thuận tay hơn. Tên xung thì hay gặp cảnh làm nhiều mà khách không nhớ.",
        "Đổi tên thương hiệu đã có tiếng thì khó, nên xem kỹ từ đầu."],
     u:"3 đến 5 phương án tên thương hiệu hợp với bạn, kèm ngày đẹp để ra mắt?",
     g:"Đặt Tên & Chọn Số",gia:"699.000đ",pk:"699000|DATTEN"},
    {t:"Số Chủ Đạo 8: giỏi kiếm tiền nhưng hay mất vì tin người",
     p:["Số 8 có đầu óc kinh doanh, nhìn đâu cũng ra cơ hội. Nhiều chủ doanh nghiệp mang số 8.",
        "Bài học của số 8 thường là tiền: kiếm nhanh, tiêu cũng nhanh, hoặc mất vì cho vay, làm ăn chung.",
        "Biết nhịp năm cá nhân giúp số 8 chọn đúng lúc bung và lúc giữ."],
     u:"Bạn hợp kinh doanh lĩnh vực nào, làm một mình hay có người cùng? Năm nào nên bung lớn?",
     g:"Làm Chủ Hay Làm Thuê",gia:"299.000đ",pk:"299000|LAMCHU"},
    {t:"Bé số 2: nhạy cảm, dễ tủi thân, cần được ôm nhiều",
     p:["Bé Số Chủ Đạo 2 rất tinh ý, nhìn mặt ba mẹ là biết vui hay buồn. Bé dễ khóc, dễ tủi thân khi bị so sánh.",
        "La mắng to tiếng làm bé số 2 thu mình lại. Một cái ôm và lời nói nhẹ thì hiệu quả hơn nhiều.",
        "Bé số 2 thường giỏi các việc cần sự khéo léo, phối hợp, nghệ thuật."],
     u:"Bé nhà bạn số mấy, cần được khen thế nào, năng khiếu nào nên cho học sớm?",
     g:"Thấu Hiểu Con Yêu",gia:"399.000đ",pk:"399000|CONYEU"},
    {t:"Đổi tên, dùng biệt danh có làm đổi vận?",
     p:["Thần số học tính chỉ số gốc từ tên khai sinh. Tên đang dùng hằng ngày (biệt danh, tên sau kết hôn) thêm một lớp năng lượng bên ngoài.",
        "Có người đổi tên xong thấy đời thuận hơn, có người lại thấy lạc lõng. Tùy tên mới bổ trợ hay giằng co với tên gốc.",
        "Nếu bạn đã đổi tên, khi xem nên gửi cả tên cũ và tên đang dùng."],
     u:"Tên bạn đang dùng hằng ngày có đang giúp bạn không?",
     g:"Bản Đồ Năng Lượng",gia:"199.000đ",pk:"199000|BANDO"},
    {t:"Số Chủ Đạo 5: hay đổi việc có phải là xấu?",
     p:["Số 5 thích tự do, thích cái mới. Làm một chỗ lâu là chán, nên hay bị nói là cả thèm chóng chán.",
        "Thật ra số 5 hợp những nghề được di chuyển, gặp nhiều người: bán hàng, du lịch, truyền thông, làm online.",
        "Đổi việc không xấu, đổi sai lúc mới xấu."],
     u:"Nghề nào cho số 5 như bạn vừa tự do vừa có thu nhập ổn định? Năm nào nên chuyển?",
     g:"Làm Chủ Hay Làm Thuê",gia:"299.000đ",pk:"299000|LAMCHU"},
    {t:"Hai vợ chồng cùng Số Chủ Đạo: hợp quá hay giống quá?",
     p:["Cùng số thì hiểu nhau nhanh, nhưng cũng dễ cùng cứng đầu, cùng giành phần đúng.",
        "Hai người số 1 dễ tranh quyền quyết, hai người số 7 dễ mỗi người một góc. Phải nhìn thêm Linh Hồn và Nhân Cách mới thấy hết.",
        "Cặp giống nhau cần học cách nhường, cặp khác nhau cần học cách hiểu."],
     u:"Hai bạn giống nhau ở đâu, cần nhường nhau ở đâu để nhà êm?",
     g:"Năng Lượng Tình Yêu",gia:"499.000đ",pk:"499000|TINHYEU"},
    {t:"Tết 2027: chuẩn bị năm mới bằng con số",
     p:["Mỗi dịp cuối năm, nhiều người hỏi năm tới nên làm gì, tránh gì. Năm Cá Nhân 2027 trả lời câu này theo cách rất cụ thể.",
        "Biết trước chủ đề năm giúp bạn đặt mục tiêu đúng: năm số 3 hợp mở rộng quan hệ, năm số 4 hợp xây nền, năm số 8 hợp làm ăn.",
        "Đây cũng là món quà Tết ý nghĩa cho bố mẹ, người thương."],
     u:"Năm 2027 của bạn là năm số mấy, và 12 tháng tới nên đi thế nào?",
     g:"Năm Cá Nhân 2027",gia:"149.000đ",pk:"149000|NAM2027"}
  ];

  var START = Date.UTC(2026, 10, 24); // 24/11/2026
  function vnDayIndex() {
    var now = Date.now() + 7 * 3600 * 1000; // giờ Việt Nam
    return Math.floor((now - START) / 86400000);
  }
  function ngayVN(offset) {
    var d = new Date(Date.now() + 7 * 3600 * 1000 - offset * 86400000);
    return ('0' + d.getUTCDate()).slice(-2) + '/' + ('0' + (d.getUTCMonth() + 1)).slice(-2);
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  function card(b, offset, big) {
    var a = el('article', 'bmn-card' + (big ? ' bmn-big' : ''));
    a.appendChild(el('span', 'bmn-date', offset === 0 ? 'Bài hôm nay · ' + ngayVN(0) : ngayVN(offset)));
    a.appendChild(el('h3', null, b.t));
    var body = el('div', 'bmn-body');
    b.p.forEach(function (x) { body.appendChild(el('p', null, x)); });
    var u = el('p', 'bmn-up', b.u); body.appendChild(u);
    a.appendChild(body);
    var cta = el('div', 'bmn-cta');
    // Giá lấy thẳng từ thẻ gói trên trang, để đổi giá gói là bài tự đổi theo.
    var gia = b.gia, real0 = b.pk === 'go99' ? document.querySelector('#goi-xem .pack-99 .price') : document.querySelector('#goi-xem [data-pk="' + b.pk + '"]');
    if (real0 && b.pk !== 'go99') { var pk0 = real0.closest('.pack'); real0 = pk0 && pk0.querySelector('.price'); }
    if (real0 && real0.textContent.trim()) gia = real0.textContent.trim();
    var price = el('div', 'bmn-price'); price.appendChild(el('span', null, b.g + ' ')); price.appendChild(el('b', null, gia)); cta.appendChild(price);
    var row = el('div', 'bmn-btns');
    var go = el('a', 'btn btn-gold', b.pk === 'go99' ? 'Tự xem ngay' : 'Xem cho mình');
    go.href = b.pk === 'go99' ? '#tu-xem' : '#goi-xem';
    if (b.pk !== 'go99') go.addEventListener('click', function (e) {
      var real = document.querySelector('#goi-xem [data-pk="' + b.pk + '"]');
      if (real) { e.preventDefault(); real.click(); }
    });
    var zl = el('a', 'btn btn-ghost', 'Hỏi cô Thảo qua Zalo');
    zl.href = 'https://zalo.me/0935949141'; zl.target = '_blank'; zl.rel = 'noopener';
    row.appendChild(go); row.appendChild(zl); cta.appendChild(row);
    a.appendChild(cta);
    if (!big) {
      body.hidden = true;
      var more = el('button', 'bmn-more', 'Đọc bài'); more.type = 'button';
      more.addEventListener('click', function () { body.hidden = !body.hidden; more.textContent = body.hidden ? 'Đọc bài' : 'Thu gọn'; });
      a.insertBefore(more, cta);
    }
    return a;
  }

  function render() {
    var box = document.getElementById('bmn-list'); if (!box) return;
    var n = BAI.length, i = vnDayIndex();
    box.textContent = '';
    box.appendChild(card(BAI[((i % n) + n) % n], 0, true));
    var past = el('div', 'bmn-past');
    var shown = 0;
    for (var k = 1; k <= 6 && i - k >= 0; k++) { past.appendChild(card(BAI[((i - k) % n + n) % n], k, false)); shown++; }
    if (shown) { box.appendChild(el('h4', 'bmn-ph', 'Bài mấy hôm trước')); box.appendChild(past); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
