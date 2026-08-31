(function () {
  'use strict';

  var STORAGE_KEY = 'mayanvie-lang';
  var DEFAULT = 'en';

  var strings = {
    en: {
      'nav.home': 'Home',
      'nav.work': 'Work',
      'nav.about': 'About',
      'nav.cv': 'Download CV',
      'nav.menuOpen': 'Open menu',
      'nav.menuClose': 'Close menu',
      'lang.label': 'Language',
      'footer.copy': '© 2026 Le Kieu Duyen · Learning & Talent Operations',
      'footer.tagline': 'Ho Chi Minh City · open to L&D / learning ops roles in Vietnam',
      'tag.comingSoon': 'Coming soon',
      'tag.inProgress': 'In progress',
      'tag.caseStudy': 'Case study',
      'tag.note01': 'Note 01',
      'tag.note02': 'Note 02',
      'tag.note03': 'Note 03',
      'btn.email': 'Email me',
      'btn.linkedin': 'LinkedIn',
      'btn.cv': 'Download CV',
      'btn.contact': 'Get in touch',
      'btn.seeWork': 'See my work',
      'meta.home.title': 'Le Kieu Duyen — Learning & Talent Operations',
      'meta.home.desc': 'Le Kieu Duyen — Learning & Talent Operations. Onboarding design, facilitation, and learning science in practice.',
      'meta.work.title': 'Work — Le Kieu Duyen',
      'meta.work.desc': 'Case studies in learning design and operations.',
      'meta.about.title': 'About — Le Kieu Duyen',
      'meta.about.desc': 'About Le Kieu Duyen — Learning & Talent Operations.',
      'meta.case.title': 'Onboarding Program Case — Le Kieu Duyen',
      'meta.case.desc': '7-day onboarding program for Art Experience Guides — learner analysis, modules, and assessment design.',
      'meta.sales.title': 'Sales Team Communication Case — Le Kieu Duyen',
      'meta.sales.desc': 'Simulated case study: needs scoping, belief gap vs skill gap, and a 4-hour workshop for showroom staff — Beyond the Price Tag.',
      'meta.essay.title': "Your brain doesn't start at zero — Le Kieu Duyen",
      'meta.essay.desc': 'Essay on schemas, memory, and language learning — originally published Jun 2025.',
      'home.kicker': 'Learning & talent ops · Ho Chi Minh City',
      'home.hero': "Hi, I'm <em>Duyen</em>.",
      'home.heroLead': "I design learning programs for people who get quietly stuck. The material is rarely the hard part — it's the path no one made clear. Asking twice can still feel like one question too many.",
      'home.secWork': 'Selected work',
      'home.projects': 'Projects',
      'home.p1.tag': 'Case study',
      'home.p1.title': 'Art Experience Guide: onboarding program',
      'home.p1.desc': 'A 7-day path built from floor observations. Learner analysis, program outline, one module written in full.',
      'home.p1.cta': 'Read case study →',
      'work.caseCard.desc': 'Learner analysis, program outline, one module in full. Customer Service with activities and pass criteria.',
      'work.caseCard.cta': 'Open case study →',
      'home.p2.title': "Supporting a sales team's communication skills",
      'home.p2.tag': 'Case study',
      'home.p2.desc': 'Simulated case: belief gap before skill gap. Needs scoping, workshop outline, video brief, and coordination plan.',
      'home.p2.cta': 'Read case study →',
      'home.p3.title': 'Learner content plan & timeline',
      'home.p3.desc': 'Topics, sequence, and weekly rhythm between sessions. Sample from tutoring work.',
      'home.approach': 'Approach',
      'home.how': 'How I work',
      'flow.chip1': 'Context',
      'flow.chip2': 'Sequence',
      'flow.chip3': 'Write',
      'flow.chip4': 'Rails',
      'flow.chip5': 'Edit',
      'flow.s0.step': 'Step 01',
      'flow.s0.title': 'Start with context',
      'flow.s0.text': "Who's in the room. What they already carry. The questions they're too embarrassed to ask in week one.",
      'flow.s1.step': 'Step 02',
      'flow.s1.title': 'Sequence the week',
      'flow.s1.text': 'Orientation before detail. A spine for the first days so nobody hits a wall of information in hour one.',
      'flow.s2.step': 'Step 03',
      'flow.s2.title': 'Write for doing',
      'flow.s2.text': "Plain-language guides and rehearsals. A lightweight check for whether you can do it yet. Slide decks alone don't get you there.",
      'flow.s3.step': 'Step 04 · parallel',
      'flow.s3.title': 'Keep the rails visible',
      'flow.s3.text': 'Trackers, reminders, and handoffs. The boring parts that stop things from quietly falling apart.',
      'flow.s4.step': 'Step 05 · parallel',
      'flow.s4.title': 'Edit where people get stuck',
      'flow.s4.text': "If the same question comes up twice, that's usually the next paragraph to write. Not a reason to buy a new tool.",
      'flow.back': '← Back',
      'flow.next': 'Next →',
      'flow.done': 'Done',
      'flow.foot': 'Read the full approach →',
      'home.strengths': 'Strengths',
      'home.bring': 'What I bring',
      'home.b1.tag': 'communication',
      'home.b1.title': 'Storytelling & layout',
      'home.b1.desc': "I care whether a doc feels approachable enough to open. Having the information in the file somewhere isn't enough.",
      'home.b2.tag': 'learning science',
      'home.b2.title': 'Plain-language writing',
      'home.b2.desc': "I write about memory, motivation, and what blocks adults from learning. Often the subject isn't the problem.",
      'home.b3.tag': 'operations',
      'home.b3.title': 'Systems that stick',
      'home.b3.desc': 'Modules, checklists, trackers, follow-up. So a program can run again without reinventing everything each time.',
      'home.talk': "Let's talk",
      'home.cta': 'Open to <strong>Learning & Talent Operations</strong> and L&D roles in Vietnam. Email or connect on LinkedIn. Happy to walk through the case study.',
      'work.eyebrow': 'Portfolio',
      'work.title': 'Work',
      'work.lead': "Day one is as much about nerves and logistics as it is about information. I try to write things people will actually open. I build in practice before the stakes go up. That might be a guide's first week. It might be a program someone has to run again next month.",
      'work.l1.title': 'I listen',
      'work.l1.desc': 'Tutoring floors and exhibition walk-throughs. I pay attention to when someone is stuck before any syllabus exists.',
      'work.w1b.title': "Exhibition walk-through: what visitors don't ask aloud",
      'work.w1b.desc': "Field notes from guiding small groups through art spaces. Hesitation, curiosity, and the questions people don't say out loud.",
      'work.w1c.title': 'Tutoring floor: when learners stall without saying so',
      'work.w1c.desc': 'Signals I watch for in one-on-one sessions before reaching for a syllabus or a fix.',
      'work.l2.title': 'I structure',
      'work.l2.desc': 'Outlines, session rhythm, and artifacts people can open on day one on their own.',
      'work.l3.title': 'I keep learning',
      'work.l3.desc': 'Essays on memory, motivation, and what blocks adults. I publish them as I test ideas in my own study.',
      'work.p2.tag': 'Sample · study plan',
      'work.p2.cta': 'Open sample plan →',
      'work.p3.title': 'More artifacts landing soon',
      'work.p3.desc': 'Vocabulary tracker samples (HSK sheets) and screenshots from onboarding materials.',
      'work.essay.tag': 'Essay · Jun 2025',
      'work.essay.title': "Your brain doesn't start at zero: it starts with a schema",
      'work.essay.desc': 'Schemas, memory, and why starting from zero never quite feels true.',
      'work.essay.cta': 'Read here →',
      'work.e2.title': 'Input vs. output: why consuming alone rarely builds skill',
      'work.e2.desc': 'On the gap between watching, reading, and actually rehearsing. From my own language study.',
      'work.e3.title': 'What blocks adults from learning',
      'work.e3.desc': "Memory, motivation, and the friction that often isn't the subject itself. Notes as I test ideas in practice.",
      'work.foot': 'More on <a href="https://mayanvie.substack.com/" target="_blank" rel="noopener"><em>One note at a time</em> →</a>',
      'work.toolkit': 'Toolkit',
      'work.tools': 'Tools I use',
      'work.toolsNote': "I pick tools for findability and handoff. A shiny new app doesn't help much if someone else can't find the same file next month.",
      'work.toolsTag': 'Comfortable learning new systems quickly',
      'work.systems': 'Systems',
      'work.lms': 'LMS & corporate systems',
      'work.lms1': "I haven't run an enterprise LMS in production yet. I do think like an ops teammate. Clear pathways, enrollments, completion signals. An experience that answers “what do I do today?” without a scavenger hunt.",
      'work.lms2': "I'm ready to learn tools like iLearn (or similar) quickly. The logic is familiar. Sequenced content, practice tasks, pass rules. The interface is what I'd need to learn.",
      'about.title': 'About',
      'about.role': 'Learning & Talent Operations · Ho Chi Minh City',
      'about.lead': "I'm moving into Learning & Talent Operations because I keep seeing the same pattern. People get stuck when the path isn't clear. Sometimes asking for help feels worse than staying quiet. I want to work on that part of the job, not only the slides.",
      'about.path': 'My path (short version)',
      'about.path1': 'I studied <strong>Cultural Studies</strong> at USSH (Ho Chi Minh City). That trained me to notice context. Who someone is. What actually matters to them. Why a reasonable instruction still fails in real life.',
      'about.path2': 'After that: <strong>content and marketing at a creative startup</strong> (many hats), <strong>guiding visitors at art exhibitions</strong>, <strong>private tutoring</strong>, and <strong>assisting at an English center</strong>. Different jobs, same pattern underneath. Someone is new, overloaded, or afraid of getting it wrong. I try to make the next step obvious.',
      'about.path3': "Now I'm aiming for <strong>Learning Operations</strong>, <strong>Talent & Learning Operations</strong>, and <strong>learning experience design</strong> in edtech, creative teams, or corporate L&D. That's the direction I'm building toward.",
      'about.timeline': 'Career timeline',
      'about.timelineIntro': 'Most recent first. The through-line underneath the different roles.',
      'about.t1.title': 'Now: Learning & Talent Operations focus',
      'about.t1.meta': 'Portfolio, Substack lab, targeting L&D / learning ops roles in Vietnam',
      'about.t2.title': 'TOA Exhibition, Art Experience Guide',
      'about.t2.meta': 'Live facilitation (5–50 guests), guide training, 7-day onboarding program',
      'about.t3.title': 'MAC English & independent tutoring',
      'about.t3.meta': 'Progress tracking (~20 learners/class), 1-on-1 lesson plans (3 months–3 years)',
      'about.t4.title': 'Mamoon Vietnam, Content & Internal Training Specialist',
      'about.t4.meta': 'Onboarding SOPs, workshop logistics, Asana, Notion, Canva, KPI trackers',
      'about.t5.title': 'Bachelor of Cultural Studies, USSH (VNU-HCMC)',
      'about.t5.meta': 'Culture, communication and context. Foundation for how I read learners and teams.',
      'about.bring': 'What I bring',
      'about.bringIntro': 'What I lean on across tutoring, guiding, and program work.',
      'about.b2.desc': 'On <a href="https://mayanvie.substack.com/" target="_blank" rel="noopener">Substack</a> I write about memory, motivation, and what blocks adults from learning. Often the language itself isn\'t the problem.',
      'case.back': '← Back to work',
      'case.tag': 'case study',
      'case.title': 'Art Experience Guide: onboarding program',
      'case.m1': 'Onboarding design',
      'case.m2': '7 days · 26 hours',
      'case.m3': 'Reconstructed portfolio piece',
      'case.lead': '<strong>Role:</strong> Learning & onboarding design (from my time as an Art Experience Guide)<br><strong>Organization:</strong> A creative exhibition (name kept confidential)',
      'case.note': '<strong>Portfolio note:</strong> This program is <strong>reconstructed</strong> from gaps I saw on the job, not from a post-launch report. I don\'t have rollout metrics yet. The design logic is real. The numbers would come after a pilot.',
      'case.sum1.t': 'Learners',
      'case.sum1.p': 'New Art Experience Guides, usually 18–30, often students or career changers from arts, social sciences, or languages. They knew basic company info but not workflows, org structure, exhibition content, or how to handle surprises.',
      'case.sum2.t': 'Problem',
      'case.sum2.p': 'New hires learned from whoever was available that day, so quality shifted every hiring round. The thing that broke people in week one was detailed zone checklists. Too much to hold in your head while everything else is new.',
      'case.sum3.t': 'What I did',
      'case.sum3.p': 'Designed a 7-day program (5 modules + practice + assessment), including learner analysis, learning objectives, program outline, and one fully written module (Customer Service) with activities and pass criteria.',
      'case.sum4.t': 'Design goal',
      'case.sum4.p': 'After the first week, a guide should set up zones on time and guide full tours alone. They should answer basic exhibition questions, contact the right teams, and handle common guest situations in English or with support tools.',
      'case.allWork': '← All work',
      'sales.back': '← Back to work',
      'sales.tag': 'case study',
      'sales.title': "Supporting a sales team's communication skills",
      'sales.m1': 'Needs analysis · Workshop design',
      'sales.m2': '4 hours · 20 learners',
      'sales.m3': 'Simulated portfolio piece',
      'sales.lead': '<strong>Role:</strong> L&amp;D specialist (the only L&amp;D function at the time)<br><strong>Context:</strong> Fashion/beauty brand with e-commerce + a small showroom (simulated)',
      'sales.note': '<strong>Portfolio note:</strong> This case is <strong>simulated</strong> — company, showroom, and conversations are constructed for the portfolio. The root cause (staff avoiding follow-up because it feels like pushing) comes from real observations across different work settings.',
      'sales.sum1.t': 'Learners',
      'sales.sum1.p': '20 showroom staff for a fashion/beauty brand. They had product training and price-objection scripts, but in-store conversion lagged even though traffic was not bad.',
      'sales.sum2.t': 'Problem',
      'sales.sum2.p': 'Not just a confidence gap. Staff believed that explaining more when a customer said “it’s expensive” meant pushing product — so they knew the script and chose not to use it. A generic sales-skills workshop would miss that.',
      'sales.sum3.t': 'What I did',
      'sales.sum3.p': 'Scoped the need before agreeing to train. Proposed a 4-hour workshop, <em>Beyond the Price Tag</em>, plus a video brief, roleplay design, a job aid, and a 10-day coordination plan.',
      'sales.sum4.t': 'Design goal',
      'sales.sum4.p': 'Staff explain product value in their own words when price comes up — and can tell a pushy reply from one that helps the customer understand value.',
      'sales.allWork': '← All work',
      'essay.back': '← Back to work',
      'essay.tag': 'Essay · Jun 2025',
      'essay.title': "Your brain doesn't start at zero — it starts with a schema",
      'essay.enNote': 'This essay is in English (original on Substack).',
      'essay.sub': 'The brain doesn\'t like starting from zero — it starts with a "schema." An essay on language learning, especially the part about remembering vocabulary.'
    },
    vi: {
      'nav.home': 'Trang chủ',
      'nav.work': 'Dự án',
      'nav.about': 'Giới thiệu',
      'nav.cv': 'Tải CV',
      'nav.menuOpen': 'Mở menu',
      'nav.menuClose': 'Đóng menu',
      'lang.label': 'Ngôn ngữ',
      'footer.copy': '© 2026 Lê Kiều Duyên · Learning & Talent Operations',
      'footer.tagline': 'TP. Hồ Chí Minh · đang tìm vai L&D / learning ops tại Việt Nam',
      'tag.comingSoon': 'Sắp có',
      'tag.inProgress': 'Đang làm',
      'tag.caseStudy': 'Case study',
      'tag.note01': 'Note 01',
      'tag.note02': 'Note 02',
      'tag.note03': 'Note 03',
      'btn.email': 'Gửi email',
      'btn.linkedin': 'LinkedIn',
      'btn.cv': 'Tải CV',
      'btn.contact': 'Liên hệ',
      'btn.seeWork': 'Xem dự án',
      'meta.home.title': 'Lê Kiều Duyên — Learning & Talent Operations',
      'meta.home.desc': 'Portfolio về thiết kế chương trình học và vận hành đào tạo — onboarding, facilitation, và khoa học học tập trong thực tế.',
      'meta.work.title': 'Dự án — Lê Kiều Duyên',
      'meta.work.desc': 'Case study về thiết kế chương trình học và vận hành đào tạo.',
      'meta.about.title': 'Giới thiệu — Lê Kiều Duyên',
      'meta.about.desc': 'Giới thiệu về Lê Kiều Duyên — Learning & Talent Operations.',
      'meta.case.title': 'Case onboarding — Lê Kiều Duyên',
      'meta.case.desc': 'Chương trình onboarding 7 ngày cho Art Experience Guide — phân tích người học, module và tiêu chí đánh giá.',
      'meta.sales.title': 'Case giao tiếp team bán hàng — Lê Kiều Duyên',
      'meta.sales.desc': 'Case giả lập: needs scoping, belief gap vs skill gap, và workshop 4 giờ cho nhân viên showroom — Beyond the Price Tag.',
      'meta.essay.title': 'Não không thích bắt đầu bằng số 0 — Lê Kiều Duyên',
      'meta.essay.desc': 'Bài viết về schema, trí nhớ và học ngoại ngữ — đăng tháng 6/2025 trên Substack.',
      'home.kicker': 'Learning & talent ops · TP. Hồ Chí Minh',
      'home.hero': 'Chào, mình là <em>Duyen</em>.',
      'home.heroLead': 'Mình thiết kế chương trình học cho những người đang lạc đường mà không nói ra. Thường thì nội dung không khó — chỉ là không ai chỉ rõ lộ trình. Hỏi lại lần hai cứ như là quá nhiều.',
      'home.secWork': 'Một vài dự án',
      'home.projects': 'Dự án',
      'home.p1.tag': 'Case study',
      'home.p1.title': 'Art Experience Guide: chương trình onboarding',
      'home.p1.desc': 'Lộ trình 7 ngày từ những gì mình quan sát trên sàn. Có phân tích người học, outline chương trình, và một module viết đầy đủ.',
      'home.p1.cta': 'Đọc case study →',
      'work.caseCard.desc': 'Phân tích người học, outline chương trình, một module viết đầy đủ — Customer Service kèm hoạt động và tiêu chí đạt.',
      'work.caseCard.cta': 'Mở case study →',
      'home.p2.title': 'Hỗ trợ kỹ năng giao tiếp cho team bán hàng',
      'home.p2.tag': 'Case study',
      'home.p2.desc': 'Case giả lập: belief gap trước skill gap. Needs scoping, outline workshop, video brief, và kế hoạch phối hợp.',
      'home.p2.cta': 'Đọc case study →',
      'home.p3.title': 'Kế hoạch nội dung & timeline cho người học',
      'home.p3.desc': 'Chủ đề, thứ tự, nhịp tuần giữa các buổi. Mẫu lấy từ công việc gia sư.',
      'home.approach': 'Cách làm',
      'home.how': 'Cách mình làm việc',
      'flow.chip1': 'Bối cảnh',
      'flow.chip2': 'Trình tự',
      'flow.chip3': 'Viết',
      'flow.chip4': 'Vận hành',
      'flow.chip5': 'Chỉnh sửa',
      'flow.s0.step': 'Bước 01',
      'flow.s0.title': 'Bắt đầu từ bối cảnh',
      'flow.s0.text': 'Ai đang ở trong phòng. Họ đã mang theo gì. Những câu hỏi ngại hỏi trong tuần đầu.',
      'flow.s1.step': 'Bước 02',
      'flow.s1.title': 'Sắp thứ tự cho tuần đầu',
      'flow.s1.text': 'Định hướng trước, chi tiết sau. Một khung cho vài ngày đầu để không bị ngập thông tin ngay từ giờ một.',
      'flow.s2.step': 'Bước 03',
      'flow.s2.title': 'Viết để làm được',
      'flow.s2.text': 'Hướng dẫn bằng ngôn ngữ đời thường, kèm luyện tập. Một cách nhẹ để biết mình đã làm được chưa. Slide deck một mình thì chưa đủ.',
      'flow.s3.step': 'Bước 04 · song song',
      'flow.s3.title': 'Giữ cho “đường ray” luôn nhìn thấy',
      'flow.s3.text': 'Tracker, nhắc việc, bàn giao — mấy phần tẻ nhạt mà giúp mọi thứ không âm thầm tuột dần.',
      'flow.s4.step': 'Bước 05 · song song',
      'flow.s4.title': 'Sửa chỗ người ta hay kẹt',
      'flow.s4.text': 'Cùng một câu hỏi lặp lại hai lần — thường là đoạn cần viết tiếp. Không phải lý do để mua tool mới.',
      'flow.back': '← Quay lại',
      'flow.next': 'Tiếp →',
      'flow.done': 'Xong',
      'flow.foot': 'Đọc đầy đủ cách làm →',
      'home.strengths': 'Điểm mạnh',
      'home.bring': 'Mình mang theo gì',
      'home.b1.tag': 'communication',
      'home.b1.title': 'Kể chuyện & bố cục',
      'home.b1.desc': 'Mình quan tâm tới việc một tài liệu có đủ “dễ mở” không. Chỉ nhét thông tin đâu đó trong file thì chưa đủ.',
      'home.b2.tag': 'learning science',
      'home.b2.title': 'Viết ngôn ngữ đời thường',
      'home.b2.desc': 'Mình viết về trí nhớ, động lực, và điều cản trở người lớn khi học. Nhiều khi vấn đề không nằm ở môn học.',
      'home.b3.tag': 'operations',
      'home.b3.title': 'Hệ thống dùng được lâu',
      'home.b3.desc': 'Module, checklist, tracker, follow-up — để chương trình chạy lại mà không phải làm lại từ đầu mỗi lần.',
      'home.talk': 'Liên hệ',
      'home.cta': 'Mình đang tìm vai <strong>Learning & Talent Operations</strong> và L&D tại Việt Nam. Cứ email hoặc kết nối LinkedIn. Rất sẵn lòng đi qua case study cùng bạn.',
      'work.eyebrow': 'Portfolio',
      'work.title': 'Dự án',
      'work.lead': 'Ngày đầu không chỉ là chuyện thông tin — còn là lo lắng và mớ logistics. Mình cố viết những thứ người ta thật sự mở ra đọc. Luyện tập trước khi áp lực tăng lên. Có thể là tuần đầu của một guide. Cũng có thể là chương trình mà ai đó phải chạy lại vào tháng sau.',
      'work.l1.title': 'Mình lắng nghe',
      'work.l1.desc': 'Từ sàn gia sư đến dẫn triển lãm — mình để ý khi ai đó kẹt lại, trước cả khi có syllabus.',
      'work.w1b.title': 'Dẫn triển lãm: những điều khách không hỏi thành lời',
      'work.w1b.desc': 'Ghi chú từ việc dẫn nhóm nhỏ qua không gian nghệ thuật. Do dự, tò mò, và những câu hỏi không ai nói ra.',
      'work.w1c.title': 'Sàn gia sư: khi học viên kẹt mà không nói',
      'work.w1c.desc': 'Những tín hiệu mình để ý trong buổi 1-1, trước khi vội lấy syllabus hay cách sửa.',
      'work.l2.title': 'Mình cấu trúc',
      'work.l2.desc': 'Outline, nhịp buổi học, và những tài liệu người ta mở được ngay từ ngày đầu — không cần ai kè.',
      'work.l3.title': 'Mình học liên tục',
      'work.l3.desc': 'Bài viết về trí nhớ, động lực, và điều cản trở người lớn khi học. Mình đăng dần khi tự thử các ý tưởng trong quá trình học của mình.',
      'work.p2.tag': 'Mẫu · kế hoạch học',
      'work.p2.cta': 'Mở kế hoạch mẫu →',
      'work.p3.title': 'Sắp thêm vài tài liệu mẫu',
      'work.p3.desc': 'Mẫu tracker từ vựng (HSK) và screenshot tài liệu onboarding.',
      'work.essay.tag': 'Bài viết · 6/2025',
      'work.essay.title': 'Não không thích bắt đầu bằng số 0, mà bằng “schema”',
      'work.essay.desc': 'Schema, trí nhớ, và vì sao “bắt đầu từ số 0” không bao giờ thật sự đúng.',
      'work.essay.cta': 'Đọc tại đây →',
      'work.e2.title': 'Input vs. output: chỉ xem/đọc hiếm khi tạo ra kỹ năng',
      'work.e2.desc': 'Về khoảng cách giữa xem, đọc và thực sự luyện tập — từ trải nghiệm học ngôn ngữ của mình.',
      'work.e3.title': 'Điều gì cản trở người lớn khi học',
      'work.e3.desc': 'Trí nhớ, động lực, và ma sát không phải lúc nào cũng nằm ở môn học. Ghi chú khi mình thử các ý tưởng trong thực tế.',
      'work.foot': 'Đọc thêm trên <a href="https://mayanvie.substack.com/" target="_blank" rel="noopener"><em>One note at a time</em> →</a>',
      'work.toolkit': 'Công cụ',
      'work.tools': 'Tool mình hay dùng',
      'work.toolsNote': 'Mình chọn tool theo hai tiêu chí: tìm lại được, và bàn giao được. App mới đẹp cũng chẳng ích gì nếu tháng sau không ai tìm được cùng một file.',
      'work.toolsTag': 'Học hệ thống mới khá nhanh',
      'work.systems': 'Hệ thống',
      'work.lms': 'LMS & hệ thống doanh nghiệp',
      'work.lms1': 'Mình chưa từng vận hành LMS doanh nghiệp thật sự. Nhưng mình nghĩ như một đồng đội ops: lộ trình rõ, enrollment, tín hiệu hoàn thành — một trải nghiệm trả lời được câu “hôm nay làm gì?” mà không phải đi săn thông tin khắp nơi.',
      'work.lms2': 'Mình sẵn sàng học iLearn (hoặc tương tự) khá nhanh. Logic thì quen rồi: nội dung theo thứ tự, bài thực hành, quy tắc pass. Phần cần làm quen là giao diện.',
      'about.title': 'Giới thiệu',
      'about.role': 'Learning & Talent Operations · TP. Hồ Chí Minh',
      'about.lead': 'Mình chuyển hướng sang Learning & Talent Operations vì cứ gặp đi gặp lại một pattern: người ta kẹt khi lộ trình không rõ. Đôi khi xin giúp còn khó hơn im lặng. Mình muốn làm phần đó của công việc — không chỉ làm slide.',
      'about.path': 'Lộ trình (bản ngắn)',
      'about.path1': 'Mình học <strong>Văn hóa học</strong> tại USSH (TP. Hồ Chí Minh). Nền đó dạy mình để ý bối cảnh — ai là ai, điều gì thật sự quan trọng với họ, và vì sao một chỉ dẫn hợp lý vẫn trượt trong đời thực.',
      'about.path2': 'Sau đó mình làm <strong>content marketing ở startup sáng tạo</strong> (đội nhỏ, nhiều vai), <strong>dẫn khách triển lãm</strong>, <strong>gia sư</strong>, và <strong>trợ giảng trung tâm Anh ngữ</strong>. Việc khác nhau, nhưng dưới đó vẫn là cùng một kiểu: người mới, quá tải, hoặc sợ làm sai. Mình cố làm cho bước tiếp theo rõ ràng hơn.',
      'about.path3': 'Hiện mình hướng tới <strong>Learning Operations</strong>, <strong>Talent & Learning Operations</strong>, và <strong>thiết kế trải nghiệm học</strong> ở edtech, team sáng tạo, hoặc L&D corporate. Đó là hướng mình đang xây dần.',
      'about.timeline': 'Timeline nghề nghiệp',
      'about.timelineIntro': 'Mới nhất trước. Dưới các vai trò khác nhau vẫn có một sợi chung.',
      'about.t1.title': 'Hiện tại: tập trung Learning & Talent Operations',
      'about.t1.meta': 'Portfolio, “phòng lab” Substack, đang tìm vai L&D / learning ops tại Việt Nam',
      'about.t2.title': 'TOA Exhibition, Art Experience Guide',
      'about.t2.meta': 'Facilitation trực tiếp (5–50 khách), training guide, chương trình onboarding 7 ngày',
      'about.t3.title': 'MAC English & gia sư độc lập',
      'about.t3.meta': 'Theo dõi tiến độ (~20 học viên/lớp), kế hoạch 1-1 (3 tháng–3 năm)',
      'about.t4.title': 'Mamoon Vietnam, Content & Internal Training Specialist',
      'about.t4.meta': 'SOP onboarding, logistics workshop, Asana, Notion, Canva, KPI tracker',
      'about.t5.title': 'Cử nhân Văn hóa học, USSH (ĐHQG-HCM)',
      'about.t5.meta': 'Văn hóa, giao tiếp, bối cảnh — nền cho cách mình đọc người học và team.',
      'about.bring': 'Mình mang theo gì',
      'about.bringIntro': 'Những thứ mình thường dựa vào — qua gia sư, dẫn triển lãm, và làm chương trình.',
      'about.b2.desc': 'Trên <a href="https://mayanvie.substack.com/" target="_blank" rel="noopener">Substack</a> mình viết về trí nhớ, động lực, và điều cản trở người lớn khi học. Nhiều khi vấn đề không nằm ở ngôn ngữ.',
      'case.back': '← Về dự án',
      'case.tag': 'case study',
      'case.title': 'Art Experience Guide: chương trình onboarding',
      'case.m1': 'Thiết kế onboarding',
      'case.m2': '7 ngày · 26 giờ',
      'case.m3': 'Portfolio tái dựng',
      'case.lead': '<strong>Vai trò:</strong> Thiết kế learning & onboarding (thời làm Art Experience Guide)<br><strong>Tổ chức:</strong> Triển lãm sáng tạo (tên được giữ kín)',
      'case.note': '<strong>Ghi chú portfolio:</strong> Chương trình này được <strong>tái dựng</strong> từ những khoảng trống mình thấy trên sàn — không phải báo cáo sau khi triển khai. Mình chưa có số liệu rollout. Logic thiết kế thì thật. Con số sẽ có sau pilot.',
      'case.sum1.t': 'Người học',
      'case.sum1.p': 'Art Experience Guide mới, thường 18–30 tuổi — sinh viên hoặc người chuyển ngành từ nghệ thuật, khoa học xã hội, ngôn ngữ. Họ biết thông tin công ty cơ bản, nhưng chưa rõ quy trình, cơ cấu, nội dung triển lãm, hay cách xử lý tình huống bất ngờ.',
      'case.sum2.t': 'Vấn đề',
      'case.sum2.p': 'Nhân viên mới học từ ai rảnh hôm đó — nên chất lượng onboarding lệch mỗi đợt tuyển. Tuần đầu hay “gãy” ở checklist chi tiết từng zone: quá nhiều thứ phải giữ trong đầu khi mọi thứ khác cũng còn mới.',
      'case.sum3.t': 'Mình đã làm',
      'case.sum3.p': 'Thiết kế chương trình 7 ngày (5 module + thực hành + đánh giá): phân tích người học, mục tiêu, outline, và một module viết đầy đủ (Customer Service) kèm hoạt động và tiêu chí đạt.',
      'case.sum4.t': 'Mục tiêu thiết kế',
      'case.sum4.p': 'Sau tuần đầu, guide tự setup zone đúng giờ và dẫn tour một mình. Trả lời được câu hỏi cơ bản về triển lãm, liên hệ đúng team, và xử lý các tình huống khách thường gặp — bằng tiếng Anh hoặc tool hỗ trợ.',
      'case.allWork': '← Tất cả dự án',
      'sales.back': '← Về dự án',
      'sales.tag': 'case study',
      'sales.title': 'Hỗ trợ kỹ năng giao tiếp cho team bán hàng',
      'sales.m1': 'Phân tích nhu cầu · Thiết kế workshop',
      'sales.m2': '4 giờ · 20 người học',
      'sales.m3': 'Case giả lập cho portfolio',
      'sales.lead': '<strong>Vai trò:</strong> L&amp;D (lúc đó chỉ có mình kiêm nhiệm)<br><strong>Bối cảnh:</strong> Thương hiệu thời trang/làm đẹp bán online + showroom nhỏ (giả lập)',
      'sales.note': '<strong>Ghi chú portfolio:</strong> Case này là <strong>giả lập</strong> — công ty, showroom, và các cuộc trao đổi được dựng cho portfolio. Root cause (nhân viên ngại giải thích thêm vì sợ bị nhìn là đang đẩy hàng) đến từ quan sát thật ở nhiều môi trường khác nhau.',
      'sales.sum1.t': 'Người học',
      'sales.sum1.p': '20 nhân viên showroom của một thương hiệu thời trang/làm đẹp. Đã qua training sản phẩm và có script xử lý objection giá, nhưng tỉ lệ chốt tại chỗ thấp dù traffic không tệ.',
      'sales.sum2.t': 'Vấn đề',
      'sales.sum2.p': 'Không chỉ là thiếu tự tin. Nhân viên tin rằng giải thích thêm khi khách nói “đắt” là đang đẩy hàng — nên dù biết script, họ chủ động không dùng. Một buổi training kỹ năng bán hàng generic sẽ không chạm tới lớp này.',
      'sales.sum3.t': 'Mình đã làm',
      'sales.sum3.p': 'Tìm hiểu nhu cầu trước khi đồng ý làm training. Đề xuất workshop 4 giờ <em>Beyond the Price Tag</em>, kèm video brief, thiết kế roleplay, job aid, và kế hoạch phối hợp 10 ngày.',
      'sales.sum4.t': 'Mục tiêu thiết kế',
      'sales.sum4.p': 'Nhân viên giải thích được giá trị sản phẩm theo cách riêng khi khách nói đắt — và phân biệt được câu trả lời mang tính ép mua với câu trả lời mang tính giải thích giá trị.',
      'sales.allWork': '← Tất cả dự án',
      'essay.back': '← Về dự án',
      'essay.tag': 'Bài viết · 6/2025',
      'essay.title': 'Não không thích bắt đầu bằng số 0, mà bằng “schema”',
      'essay.enNote': 'Bài viết bằng tiếng Anh — bản gốc nằm trên Substack.',
      'essay.sub': 'Một bài viết liên quan đến việc học ngoại ngữ, đặc biệt là phần ghi nhớ từ vựng.'
    }
  };

  var pageMeta = {
    home: { title: 'meta.home.title', desc: 'meta.home.desc' },
    work: { title: 'meta.work.title', desc: 'meta.work.desc' },
    about: { title: 'meta.about.title', desc: 'meta.about.desc' },
    case: { title: 'meta.case.title', desc: 'meta.case.desc' },
    'case-sales': { title: 'meta.sales.title', desc: 'meta.sales.desc' },
    essay: { title: 'meta.essay.title', desc: 'meta.essay.desc' }
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'vi' ? 'vi' : DEFAULT;
  }

  function t(key) {
    var lang = getLang();
    return (strings[lang] && strings[lang][key]) || strings.en[key] || key;
  }

  function setLang(lang) {
    lang = lang === 'vi' ? 'vi' : DEFAULT;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
  }

  function apply() {
    var lang = getLang();
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length === 2) el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });

    var page = document.body.getAttribute('data-page');
    if (page && pageMeta[page]) {
      document.title = t(pageMeta[page].title);
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', t(pageMeta[page].desc));
    }

    document.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    document.dispatchEvent(new CustomEvent('mayanvie:lang', { detail: { lang: lang } }));
  }

  function injectLangSwitch() {
    var nav = document.getElementById('site-nav');
    if (!nav || nav.querySelector('.lang-switch')) return;
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', t('lang.label'));
    wrap.innerHTML =
      '<button type="button" class="lang-switch__btn" data-lang="en" aria-pressed="false">EN</button>' +
      '<button type="button" class="lang-switch__btn" data-lang="vi" aria-pressed="false">VI</button>';
    var cv = nav.querySelector('.pill');
    if (cv) nav.insertBefore(wrap, cv);
    else nav.appendChild(wrap);
    wrap.querySelectorAll('.lang-switch__btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectLangSwitch();
    apply();
  });

  window.MayanvieI18n = { t: t, getLang: getLang, setLang: setLang, apply: apply };
})();