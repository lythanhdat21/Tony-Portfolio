const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll(".resume-detail")

        resumeBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        resumeDetails.forEach(detail => {
            detail.classList.remove('active')
        })
        resumeDetails[idx].classList.add('active')
    })
})

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left')

let index = 0

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide")
    const portfolioDetails = document.querySelectorAll('.portfolio-detail')
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener("click", () => {
    if (index < 1) {
        index++
        arrowLeft.classList.remove('disabled')
    }
    else {
        index = 2
        arrowRight.classList.add('disabled')
    }
    activePortfolio()
})

arrowLeft.addEventListener("click", () => {
    if (index > 1) {
        index--
        arrowRight.classList.remove('disabled')
    }
    else {
        index = 0
        arrowLeft.classList.add('disabled')
    }
    activePortfolio()
})

// ====================== PAGINATION ======================= //

const navLinks = document.querySelectorAll('header nav a')
const logoLink = document.querySelector('.logo')
const sections = document.querySelectorAll('section')
const navbar = document.querySelector('header nav')

const activePage = () => {
    const header = document.querySelector('header')

    header.classList.remove('active')
    setTimeout(() => {
        header.classList.add('active')
    }, 1100)

    navLinks.forEach(link => {
        link.classList.remove('active')
    })

    sections.forEach(section => {
        section.classList.remove('active')
    })

    navbar.classList.remove('active')

    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage()

            link.classList.add("active")

            setTimeout(() => {
                sections[idx].classList.add('active')
            })
        }
    })
})

logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage()
        navLinks[0].classList.add('active')

        setTimeout(() => {
            sections[0].classList.add('active')
        })
    }
})

// ==================== TRANSLATION =========================

document.addEventListener('DOMContentLoaded', () => {
    
    const translations = {
        en: {
            home: "Home",
            services: "Services",
            resume: "Resume",
            porfolio: "Portfolio",
            contact: "Contact",

            // HOME
            h2: "I'm a ",
            roles: [
                "AI - Workplace Automation",
                "Demand Planner",
                "Purchasing Specialist",
                "Warehouse Keeper",
                "Sales Executive"
            ],
            home_description: [
                "Over 10 years of experience in logistics, supply chain, and sales with a proven track record of success.",
                "Strong expertise in automation and technology integration to streamline workflows and enhance efficiency.",
                "Solid background in inventory management, demand planning, and S&OP processes."
            ],
            download: "Download CV",

            // SERVICES 
            services_content: "Services",
            please: "~ ~ ~ Please, ask anything about me ~ ~ ~",
            placeholder: "Type your message here...",
            ask: "ASK",

            // RESUME 
            why_hire_me: "Why Hire Me?",
            resume_description: [
                "With over 10 years of experience in logistics, supply chain, and sales. ",
                "I bring proven expertise in automation, problem-solving, and operational optimization. ",
                "My ability to streamline workflows using AI tools has consistently improved efficiency and reduced costs. I’m committed to driving results and enhancing customer satisfaction, making me a strong asset for your team."
            ],
            experience_1: "Experience",
            education: "Education",
            skill: "Skill",
            about: "About Me",

            my_experience: "My <span>Experience</span>",
            resume_description_1: [
                "I have over 10 years of experience in logistics, supply chain, and sales.", 
                "I have integrated automation technology to reduce manual workloads by 50%, effectively managed inventory, planned S&OP, and built strong customer relationships. ",
                "I am always seeking innovative solutions to optimize operations and enhance efficiency."
            ],
         
            // ------- EXPERIENCE -------
            // SONG KIM
            SK_year: "08/2025 - 06/2026",
            SK_resumelist_sales: "Sales Excutive",
            SK_tele_position: "Responsibilities:",
            SK_tele_achiev: "Key Achievements:",
            SK_tele_desc: [              
                "- Identified and developed potential customers through telesales activities.",
                "- Contacted clients, arranged meetings, and provided consultation on automation and control solutions tailored to customer requirements.",
                "- Collected project information, assessed customer needs, and prepared quotation plans.",
                "- Conducted site surveys and coordinated with relevant stakeholders to evaluate actual installation and construction conditions.",
                "- Monitored project progress and provided support throughout the implementation process."
            ],
            SK_achiev_desc: [
                "- Acquired a solid understanding of electrical control panel wiring and operation procedures.",
                "- Developed knowledge of lighting control systems and related electrical devices.",
                "- Gained hands-on experience in surveying and implementing lighting systems at project sites.",
                "- Enhanced technical consulting skills and experience working directly with customers on-site."
            ],

            // LONG KHANG
            LK_year: "04/2025 - 07/2025",
            LK_resumelist_sales: "Sales Excutive",
            LK_tele_position: "Responsibilities:",
            LK_tele_achiev: "Key Achievements:",
            LK_tele_desc: [              
                "- Generated new business opportunities through telesales and business development activities.",
                "- Arranged meetings at the company office or LightHub showroom to introduce solutions and products.",
                "- Collected project information, including 2D/3D drawings and related technical requirements.",
                "- Collaborated with the Design and Costing departments to develop suitable solutions and commercial proposals.",
                "- Worked closely with the Team Leader to present and consult on lighting and control solutions for clients."
            ],
            LK_achiev_desc: [
                "- Gained a comprehensive understanding of business operations and project implementation processes in the lighting industry.",
                "- Developed foundational knowledge of lighting technology, luminaire selection, and practical applications in construction projects.",
                "- Became familiar with smart control systems such as Lutron and Crestron.",
                "- Strengthened cross-functional collaboration and customer consultation skills."
            ],

            // CMPI
            CMPI_year: "05/2024 - Present",
            CMPI_resumelist_sales: "Sales Excutive",
            CMPI_tele_position: "Telesales Responsibilities:",
            CMPI_tele_achiev: "Key Achievements:",
            CMPI_tele_desc: [              
                "- Contact customers involved in importing activities to introduce services and establish strong business relationships.",
                "- Regularly update the customer database and maintain accurate records of interactions.",
                "- Prepare comprehensive reports to track telesales performance, including daily, weekly, and monthly summaries.",
                "- Address customer inquiries, provide tailored solutions, and follow up on potential leads to convert them into loyal clients."
            ],
            CMPI_achiev_desc: [
                "- Designed and implemented innovative automation tools to streamline processes, significantly reducing manual workload and saving time:",
                "- - Automated Call Reports: Instantly generate detailed reports summarizing customer interactions after calls.",
                "- - Automated Document Generation: Develop tools to create personalized introduction letters and quotations automatically.",
                "- - Automated Communication Workflow: Simplified the process of sending professional documents (e.g., quotations and introduction letters) to customers with a single click.",
                "- Increased efficiency in telesales operations by integrating technology and reducing processing time by over 50%.",
                "- Enhanced customer engagement and satisfaction by delivering faster responses and more professional communication."
            ],

            // DC TECH
            year_b: "05/2022 - 08/2023",
            resumelist_planner: "General Planner",
            DC_manage: "Manage Inventory:",
            DC_manage_desc: [
                "- Conduct daily stock checks to compare theoretical quantities with actual stock levels in the warehouse.",
                "- Identify discrepancies and promptly report any differences to the relevant departments.",
                "- Implement corrective actions to resolve inventory inconsistencies and ensure accurate stock records."
            ],
            DC_sales: "Sales in Distribution:",
            DC_sales_desc: [
                "- Monitor item schedules and proactively notify Sales teams when items are approaching delivery or replenishment.",
                "- Create detailed plans for handling multiple orders simultaneously, ensuring smooth operations and timely delivery.",
                "- Coordinate with logistics and warehouse teams to manage delivery schedules and avoid delays.",
                "- Provide real-time updates to Sales teams regarding order progress, stock availability, and potential issues.",
                "- Collaborate with Sales and warehouse staff to streamline workflows, enhancing the efficiency of the distribution process."
            ],
            DC_achiev: "Key Achievements:",
            DC_achiev_desc: [
                "- Improved inventory accuracy by implementing a systematic approach to stock checks and reporting.",
                "- Successfully optimized delivery schedules for high-priority orders, ensuring customer satisfaction and timely fulfillment.",
                "- Strengthened collaboration between Sales and warehouse teams, resulting in improved operational efficiency and reduced errors."
            ],

            // PHÚ KHANG PHÁT
            year_c: "10/2018 - 02/2021",
            resumelist_outsourcing: "Outsourcing, Demand Planner, Supply Planner",
            PKP_outsourcing: "Outsourcing",
            PKP_outsourcing_desc: [
                "(10/2018 - 08/2019):",
                "- Obtain quotations from customers.",
                "- Plan sourcing from both internal and external suppliers.",
                "- Source materials from external suppliers if internal sources can't meet customer needs.",
                "- Compare payment terms, lead times, and delivery conditions among vendors.",
                "- Approve purchases through contracts, invoices, packing lists, B/Ls etc.",
                "- Track, monitor, and update order schedules.",
                "- Notify relevant departments when an order is approaching.",
                "- Evaluate supplier performance using KPIs.",
            ],
            PKP_DP: "Demand and Supply Planner",
            PKP_DP_desc: [
                "(09/2019 - 02/2021):",
                "- Update weekly, monthly, and quarterly sales and safety stock reports.",
                "- Analyze and clean historical data and marketing plans for forecasting.",
                "- Create demand forecasts using techniques such as Moving Average and Exponential Smoothing, and work with Sales and - Marketing teams to align forecast numbers.",
                "- Organize S&OP meetings with Sales, Marketing, and Operations to review supply scenarios.",
                "- Prepare functional plans for Sales & Marketing, Operations, and Supply after approval from the Director.",
                "- Upload the consensus S&OP forecast to the Google Drive system.",
                "- Plan material procurement for timber based on BOM (Bill of Materials).",
                "- Work with Sales, Marketing, and Operations to maintain safety stock levels and resolve stock issues."
            ],

            // APP TIMBER
            year_d: "10/2016 - 09/2018",
            resumelist_warehousing: "Warehouse Manager, Import/Export Executive & Outsourcing",
            APP_warehouse: "Warehouse Manager",
            APP_wareshouse_desc: [
                "(10/2016 - 05/2017):",
                "- Managed inbound and outbound timber operations.",
                "- Inspected the quantity and quality of timber.",
                "- Applied protective chemicals to prevent insect damage.",
                "- Organized timber storage for easier access.",
                "- Ensured the warehouse was the cleanest and most customer-friendly location, often hosting customer visits.",
                "- Prepared monthly timber reports."
            ],
            APP_ExIm: "Export and Import Executive",
            APP_ExIm_desc: [
                "(04/2017 - 09/2018):",
                "- Checked and prepared import documents from suppliers.",
                "- Informed customers when containers would arrive at the warehouse.",
                "- Prepared all documents for unloading containers.",
                "- Resolved issues with damaged containers or incorrect timber deliveries.",
                "- Addressed debit notes with forwarding companies.",
                "- Reported to the director once all tasks were completed."
            ],
            APP_research: "Research Sourcing",
            APP_research_desc: [
                "(11/2017 - 09/2018):",
                "- Researched sourcing based on director inquiries.",
                "- Visited warehouse suppliers to expand knowledge.",
                "- Checked the quantity and quality of items before loading into containers.",
                "- Informed the director when all tasks were completed."
            ],

            // PHÚ THỌ
            year_e: "07/2015 - 09/2016",
            resumelist_importExport: "Import/Export Executive, Warehouse Supervisor",
            phutho_ImEx: "Import/Export Executive:",
            phutho_ImEx_desc: [
                "- Checked and processed import documents.",
                "- Opened customs declaration forms.",
                "- Collected Delivery Orders (D/O) for specific shipments.",
                "- Paid premiums for containers at the shipping line.",
                "- Managed importation from Cat Lai port to the warehouse and exportation to domestic companies."
            ],
            phutho_warehouse: "Warehouse Supervisor:",
            phutho_warehouse_desc: [
                "- Addressed issues related to wooden bundles.",
                "- Selected and arranged goods for customer sales."
            ],

            // THÀNH LONG
            year_f: "03/2014 - 06/2015",
            resumelist_customs: "Customs Clearance Staff & Sales Logistics",
            TL_customs: "Customs Clearance Staff",
            TL_customs_desc: [
                "(03/2014 - 12/2014):",
                "- Collected documents from importers.",
                "- Opened customs declaration forms.",
                "- Worked with customs to release cargo from ports, such as Cat Lai."
            ],
            TL_sales: "Sales Logistics",
            TL_sales_desc: [
                "(01/2015 - 06/2015):",
                "- Sought out customers.",
                "- Prepared price quotations.",
                "- Persuaded customers to continue using the company's services and resolved customer issues."
            ],

            // ------- EDUCATION -------
            my_education: "My <span>Education</span>",
            education_description_1: [
                "I possess a strong educational background in business administration, international trade, and supply chain management. I have gained in-depth knowledge and practical skills in logistics, financial analysis, warehouse operations, and demand planning. Additionally, my education has equipped me with a comprehensive understanding of import/export procedures and global trade."
            ],

            education_year_j: "01/2025",
            GPT_4: "Build AI Apps with ChatGPT, Dall-E, and GPT-4",
            GPT_4_desc: [
                "- The basic concept of AI Engineering.",
                "- How to deploy your AI apps on the web.",
                "- How to build apps with the OpenAI API."
            ],

            education_year_a: "12/2020",
            E_commerce: "E-commerce in Supply Chain Management",
            E_commerce_desc: [
                "- Understanding the role of E-commerce in supply chain management.",
                "- Managing integrated e-commerce systems.",
                "- Inventory management strategies in the online environment."
            ],

            education_year_b: "11/2020",
            Finance: "Finance Management",
            Finance_desc: [
                "- Gained comprehensive knowledge of Finance for Small and Medium-Sized Enterprises (SMEs).",
                "- Developed skills in Foreign Currency Risk Management to navigate exchange rate fluctuations effectively.",
                "- Acquired expertise in Cost Management to enhance operational efficiency.",
                "- Mastered techniques for Supply Chain Measurement to evaluate and optimize performance.",
                "- Enhanced abilities in Financial Analysis to support strategic decision-making."
            ],

            education_year_c: "10/2020",
            Product: "Production & Operation Management",
            Product_desc: [
                "Gained in-depth knowledge of ERP processes, Lean solutions, Six Sigma methodologies, and the Theory of Constraints."
            ],

            education_year_d: "09/2020",
            warehouse: "Warehouse & Distribution Management",
            warehouse_desc: [
                "Developed expertise in warehouse layout planning and management.",
                "Studied various racking systems, including:",
                "- Single Pallet Rack.",
                "- Double-Deep Pallet Rack.",
                "- Learned input and output processes for warehouse operations."
            ],

            education_year_e: "08/2020",
            International: "International Transport Management",
            International_desc: [
                "Understanding cost management, distribution & domestics delivery method, logistics services providers and Outsourcing."
            ],

            education_year_f: "07/2020",
            Demand: "Demand Planning",
            Demand_desc: [
                "Acquired skills in demand forecasting using techniques such as MRP (Material Requirements Planning) and S&OP (Sales and Operations Planning) processes."
            ],

            education_year_g: "06/2020",
            Foundation: "Foundation of Supply Chain Management",
            Foundation_desc: [
                "Understanding the concepts & Application, Operations, Strategies & Performance, and risk Management in Supply Chain"
            ],

            education_year_h: "08/2014",
            Bachelor: "Bachelor of Business Administration",
            Bachelor_desc: [
                "Built a strong foundation in business operations, including supply and demand analysis across various goods sectors."
            ],

            education_year_i: "08/2012",
            Business: "The International Business Studies",
            Business_desc: [
                "- Gained comprehensive knowledge of import/export procedures and related documentation.",
                "- Acquired an understanding of international trade."
            ],

            // SKILLS
            my_skills: "My <span>Skills</span>",
            skills_description_1: [
                "I have a diverse skill set spanning management, leadership, and strategic planning, combined with ",
                "expertise in customer service and project management. Proficient in Microsoft Office and ",
                "telecommunications, I also bring experience in AI-driven workplace automation, showcasing my ",
                "ability to adapt to modern technological advancements."
            ],

            AI: "AI – Workplace Automation",
            customer_service: "Customer Service",
            project: "Project Management",
            strategic: "Strategic Planning",
            telecommunication: "Telecommunications",
            leadership: "Leadership",

            // ABOUT ME
            about_me: "About <span>Me</span>",
            about_me_description: [
                "This is my information described briefly below. ",
                "Hopefully, you can consider me for suitable opportunities or collaborations."
            ],

            name: "Name<span>Tony Lee</span>",
            gender: "Gender <span>Male</span>",
            // age: "Age <span>33 Years Old</span>",
            status: "Status <span>Single</span>",
            city: "City <span>Saigon</span>",
            nationality: "Nationality <span>Vietnam</span>",
            experience: "Experience <span>+10 Years</span>",
            full_time: "Full Time <span>Available</span>",
            freelance: "Freelance <span>Available</span>",
            phone: "Phone <span>+84 777 995 100</span>",
            email: "Email <span>tonylee003004@gmail.com</span>",
            languages: "Languages <span>English, Vietnamese</span>",

            // PORTFOLIO
            lastest_project: "Lastest <span>Projects</span>",
            automation_1: "Automated Call Reports",
            automation_1_desc: "Instantly generate detailed reports summarizing customer interactions after calls",

            automation_2: "Automated Document Generation",
            automation_2_desc: "Develop tools to create personalized introduction letters and quotations automatically",

            automation_3: "Automated Communication Workflow",
            automation_3_desc: "Simplified the process of sending professional documents (e.g., quotations and introduction letters) to customers with a single click.",

            live_project_1: "Live Project",
            live_project_2: "Live Project",
            live_project_3: "Live Project",

            // CONTACT
            contact_1: "Let's Work Together",
            contact_desc_1: "Don't hesitate to contact me if you find anything of mine that might help you.",
        
            email_1: "Email",
            address_1: "Address",
            address_1_desc: "Any address",

            contact_me: "Contact <span>Me!</span>",

            fullName: "Full Name",
            emailaddress: "Email Address",
            phonenumber: "Phone number",
            emailsubject: "Email Subject",
            yourmessage: "Your Message",

            sendmessage: "Send Message"
        },

        ja: {
            home: "ホーム",
            services: "サービス",
            resume: "履歴書",
            porfolio: "ポートフォリオ",
            contact: "お問い合わせ",

            // HOME
            h2: "私は ",
            roles: [
                "AI - 職場の自動化",
                "需要計画担当者",
                "購買スペシャリスト",
                "倉庫管理者",
                "営業担当者"
            ],
            home_description: [
                "物流、サプライチェーン、営業分野で10年以上の経験があり、成功の実績があります。",
                "ワークフローの効率化と生産性向上のための自動化および技術統合に関する豊富な専門知識を持っています。",
                "在庫管理、需要計画、およびS&OP（販売・運営計画）プロセスにおける堅実なバックグラウンドがあります。"
            ], 
            download: "履歴書をダウンロード",

            // SERVICES
            services_content: "サービス",
            please: "~ ~ ~ 私について何でも聞いてください ~ ~ ~",
            placeholder: "ここにメッセージを入力してください…",
            ask: "尋ねる",

            // RESUME
            why_hire_me: "なぜ私を採用するべきか？",
            resume_description: [
                "物流、サプライチェーン、営業分野で10年以上の経験を持ち、自動化。問題解決、業務効率化における確かな専門知識を提供します。AIツールを活用してワークフローを効率化する能力により、効率の向上とコスト削減を一貫して実現してきました。結果を出し、顧客満足度を向上させることに全力を注いでおり、貴社のチームにとって強力な戦力となると確信しています。",
            ],
            experience_1: "経験",
            education: "学歴",
            skill: "スキル",
            about: "私について",

            my_experience: "私の<span>経験</span>",
            resume_description_1: [
                "私は物流、サプライチェーン、営業分野で10年以上の経験があります。",
                "自動化技術を導入し、手作業の負担を50％削減した実績があります。また、在庫管理、S&OPの計画、そして強固な顧客関係の構築を効果的に行ってきました。",
                "常に業務を最適化し、効率を向上させる革新的な解決策を追求しています。"
            ],

            // ------- EXPERIENCE -------
            // SONG KIM
            SK_year: "2025年8月 ～ 2026年6月",
            SK_resumelist_sales: "営業担当",
            SK_tele_position: "業務内容:",
            SK_tele_achiev: "実績・習得スキル:",
            SK_tele_desc: [
                "- テレマーケティング活動を通じて新規顧客の開拓および潜在顧客の発掘を実施。",
                "- 顧客との連絡・商談日程の調整を行い、顧客ニーズに応じた自動化・制御ソリューションの提案を実施。",
                "- プロジェクト情報を収集し、顧客要件を分析した上で見積計画を作成。",
                "- 現地調査を実施し、関係者と連携しながら施工条件や設置環境を確認。",
                "- プロジェクトの進捗管理および導入プロセス全体のサポートを担当。"
            ],
            SK_achiev_desc: [
                "- 電気制御盤の配線および運用手順に関する知識を習得。",
                "- 照明制御システムおよび関連電気機器の知識を習得。",
                "- 建設現場における照明システムの調査・導入業務の実務経験を蓄積。",
                "- 技術提案力および顧客との現場対応能力を向上。",
            ],

            // LONG KHANG
            LK_year: "2025年4月 ～ 2025年7月",
            LK_resumelist_sales: "営業担当",
            LK_tele_position: "業務内容:",
            LK_tele_achiev: "実績・習得スキル:",
            LK_tele_desc: [
                "- テレマーケティングおよび営業活動を通じて新規顧客の開拓を実施。",
                "- 会社オフィスやLightHubショールームでの商談を設定し、製品・ソリューションを紹介。",
                "- 2D・3D図面および技術要件を含むプロジェクト情報を収集。",
                "- 設計部門および積算部門と連携し、最適な提案内容および見積書を作成。",
                "- チームリーダーと協力し、顧客に対して照明および制御システムの提案・説明を実施。"
            ],
            LK_achiev_desc: [
                "- 照明業界における営業活動およびプロジェクト遂行プロセスへの理解を深めた。",
                "- 照明技術、照明器具の選定、および建築プロジェクトでの活用方法に関する基礎知識を習得。",
                "- LutronおよびCrestronなどのスマート制御システムに関する知識を習得。",
                "- 部門間連携能力および顧客提案力を向上。",
            ],

            // CMPI
            CMPI_year: "2024年5月 ～ 現在",
            CMPI_resumelist_sales: "営業担当者",
            CMPI_tele_position: "テレセールスの主な業務内容:",
            CMPI_tele_achiev: "主な実績:",
            CMPI_tele_desc: [              
                "- 輸入業務に関与する顧客に連絡し、サービスを紹介し、強固なビジネス関係を構築する。",
                "- 顧客データベースを定期的に更新し、やり取りの記録を正確に管理する。",
                "- テレセールスの業績を追跡するため、日次、週次、月次の要約を含む包括的なレポートを作成する。",
                "- 顧客からの問い合わせに対応し、個別にカスタマイズした解決策を提供するとともに、潜在的なリードをフォローアップして忠実な顧客に転換する。"
            ],
            CMPI_achiev_desc: [
                "- 革新的な自動化ツールを設計・実装し、プロセスを効率化。手作業の負担を大幅に削減し、時間を節約:",
                "- - 自動通話レポート: 通話後に顧客とのやり取りを要約した詳細なレポートを即座に生成。",
                "- - 自動ドキュメント生成: パーソナライズされた紹介状や見積書を自動で作成するツールを開発。",
                "- - 自動コミュニケーションワークフロー: 見積書や紹介状などの専門的な文書をワンクリックで顧客に送信するプロセスを簡略化。",
                "- テクノロジーを統合し、処理時間を50%以上削減することでテレセールス業務の効率を向上。",
                "- 迅速な対応とよりプロフェッショナルなコミュニケーションを提供することで、顧客エンゲージメントと満足度を向上させた。"
            ],

            // DC TECH
            year_b: "2022年5月 ～ 2023年8月",
            resumelist_planner: "ジェネラルプランナー",
            DC_manage: "在庫管理:",
            DC_manage_desc: [
                "- 倉庫内の理論上の数量と実際の在庫レベルを比較するために、日次の在庫チェックを実施。",
                "- 不一致を特定し、関連部門に速やかに報告。",
                "- 在庫の不整合を解消し、正確な在庫記録を維持するための是正措置を実施。"
            ],
            DC_sales: "流通における営業:",
            DC_sales_desc: [
                "- 商品のスケジュールを監視し、納品や補充が近づいた際に営業チームへ事前に通知。",
                "- 複数の注文を同時に処理するための詳細な計画を作成し、円滑な運用とタイムリーな納品を確保。",
                "- 配送スケジュールを管理し遅延を防ぐため、物流チームや倉庫チームと連携。",
                "- 注文の進捗状況、在庫状況、潜在的な問題について、リアルタイムで営業チームに更新を提供。",
                "- 流通プロセスの効率を向上させるため、営業スタッフおよび倉庫スタッフと協力し、ワークフローを最適化。"
            ],
            DC_achiev: "主な実績:",
            DC_achiev_desc: [
                "- システマチックな在庫チェックと報告手法を導入し、在庫精度を向上。",
                "- 優先度の高い注文の納品スケジュールを最適化し、顧客満足度と納品の迅速化を実現。",
                "- 営業チームと倉庫チームの連携を強化し、業務効率の向上とエラーの削減を達成。"
            ],

            // PHÚ KHANG PHÁT
            year_c: "2018年10月 ～ 2021年2月",
            resumelist_outsourcing: "アウトソーシング、需要計画担当者、供給計画担当者",
            PKP_outsourcing: "ウトソーシング ",
            PKP_outsourcing_desc: [
                "(2018年10月 ～ 2019年08月):",
                "- 顧客から見積書を取得。",
                "- 内部および外部のサプライヤーからの調達計画を立案。",
                "- 内部供給が顧客ニーズを満たせない場合、外部サプライヤーから資材を調達。",
                "- 供給業者間で支払い条件、リードタイム、納品条件を比較。",
                "- 契約書、請求書、梱包明細書、船荷証券（B/L）などを通じて購入を承認。",
                "- 注文スケジュールを追跡、監視、更新。",
                "- 注文の期限が近づいた際、関連部門に通知。",
                "- KPIを使用してサプライヤーのパフォーマンスを評価。",
            ],
            PKP_DP: "需要と供給プランナー",
            PKP_DP_desc: [
                "(2019年9月 ～ 2021年2月):",
                "- 週次、月次、四半期ごとの販売および安全在庫レポートを更新。",
                "- 予測のために、過去のデータとマーケティング計画を分析・整理。",
                "- 移動平均法や指数平滑法などの手法を使用して需要予測を作成し、営業およびマーケティングチームと予測値を調整。",
                "- 営業、マーケティング、オペレーションとS&OP会議を開催し、供給シナリオを検討。",
                "- 部長の承認後、営業・マーケティング、オペレーション、供給の機能計画を準備。",
                "- 合意されたS&OP予測をGoogleドライブシステムにアップロード。",
                "- BOM（部品表）に基づいて木材の資材調達を計画。",
                "- 営業、マーケティング、オペレーションと協力し、安全在庫レベルを維持し、在庫問題を解決。"
            ],

            // APP TIMBER
            year_d: "2016年10月 ～ 2018年9月",
            resumelist_warehousing: "倉庫マネージャー、輸出入業務担当者 & アウトソーシング",
            APP_warehouse: "倉庫マネージャー、",
            APP_wareshouse_desc: [
                "(2016年10月 ～ 2017年5月):",
                "- 木材の入出庫業務を管理。",
                "- 木材の数量および品質を検査。",
                "- 昆虫による損傷を防ぐため、保護用化学薬品を適用。",
                "- 木材を効率的に取り出せるように倉庫内を整理。",
                "- 倉庫を最も清潔で顧客に優しい場所に維持し、頻繁に顧客訪問を受け入れ。",
                "- 月次木材レポートを作成。"
            ],
            APP_ExIm: "輸出入業務担当者",
            APP_ExIm_desc: [
                "(2017年4月 ～ 2018年9月):",
                "- サプライヤーからの輸入書類を確認し、準備。",
                "- コンテナが倉庫に到着する予定日を顧客に通知。",
                "- コンテナの荷下ろしに必要なすべての書類を作成。",
                "- 破損したコンテナや誤った木材配送に関する問題を解決。",
                "- フォワーディング会社とのデビットノートの問題に対処。",
                "- すべての業務が完了した後、部長に報告。"
            ],
            APP_research: "調達リサーチ",
            APP_research_desc: [
                "(2017年11月 ～ 2018年9月):",
                "- 部長の依頼に基づいて調達リサーチを実施。",
                "- 倉庫のサプライヤーを訪問し、知識を拡充。",
                "- コンテナへの積み込み前に商品の数量と品質を確認。",
                "- すべての業務が完了した後、部長に報告。"
            ],

            // PHÚ THỌ
            year_e: "2015年7月 ～ 2016年9月",
            resumelist_importExport: "輸出入業務担当者、倉庫スーパーバイザー",
            phutho_ImEx: "輸出入業務担当者:",
            phutho_ImEx_desc: [
                "- 輸入書類を確認し処理。",
                "- 税関申告書を作成。",
                "- 特定の出荷に必要な配送指示書（D/O）を収集。",
                "- 海運会社でコンテナのプレミアム料金を支払い。",
                "- カットライ港から倉庫への輸入および国内企業への輸出を管理。"
            ],
            phutho_warehouse: "倉庫スーパーバイザー:",
            phutho_warehouse_desc: [
                "- 木材束に関連する問題を解決。",
                "- 顧客販売のために商品の選定と配置を担当。"
            ],

            // THÀNH LONG
            year_f: "2014年3月 ～ 2015年6月",
            resumelist_customs: "通関スタッフ & 営業物流",
            TL_customs: "通関スタッフ",
            TL_customs_desc: [
                "(2014年3月 ～ 2014年12月):",
                "- 輸入業者から書類を収集。",
                "- 税関申告書を作成。",
                "- カットライ港などの港から貨物を引き取るために税関と連携。"
            ],
            TL_sales: "営業ロジスティクス",
            TL_sales_desc: [
                "(2015年1月 ～ 2015年6月):",
                "- 顧客を開拓。",
                "- 価格見積書を作成。",
                "- 顧客が引き続き会社のサービスを利用するよう説得し、顧客の問題を解決。"
            ],

            // ------- EDUCATION ------- 
            my_education: "私の <span>学歴</span>",
            education_description_1: [
                "ビジネス管理、国際貿易、サプライチェーン管理における強固な教育背景を持っています。", 
                "物流、財務分析、倉庫運営、需要計画に関する深い知識と実践的なスキルを習得しました。",
                "また、教育を通じて、輸出入手続きや国際貿易に関する包括的な理解を得ました。"
            ],

            education_year_j: "2025年1月",
            GPT_4: "ChatGPT、Dall-E、GPT-4でAIアプリを構築",
            GPT_4_desc: [
                "- AIエンジニアリングの基本的な概念",
                "- AIアプリをWeb上にデプロイする方法",
                "- OpenAI APIを使ってアプリを構築する方法"
            ],

            education_year_a: "2020年12月",
            E_commerce: "サプライチェーン管理におけるEコマース",
            E_commerce_desc: [
                "- サプライチェーン管理におけるEコマースの役割を理解。",
                "- 統合型Eコマースシステムの管理。",
                "- オンライン環境における在庫管理戦略。"
            ],

            education_year_b: "2020年11月",
            Finance: "財務管理",
            Finance_desc: [
                "- 中小企業（SMEs）の財務に関する包括的な知識を習得。",
                "- 為替変動に対応するための外国為替リスク管理スキルを開発。",
                "- 業務効率を向上させるためのコスト管理の専門知識を取得。",
                "- パフォーマンスを評価し最適化するためのサプライチェーン測定手法を習得。",
                "- 戦略的意思決定を支援する財務分析能力を強化。"
            ],

            education_year_c: "2020年11月",
            Product: "生産および運用管理",
            Product_desc: [
                "ERPプロセス、リーンソリューション、シックスシグマ手法、制約理論に関する深い知識を習得。"
            ],

            education_year_d: "2020年9月",
            warehouse: "倉庫および流通管理",
            warehouse_desc: [
                "倉庫のレイアウト計画と管理に関する専門知識を習得。",
                "以下を含むさまざまなラックシステムを学習：",
                "- シングルパレットラック",
                "- ダブルディープパレットラック",
                "- 倉庫運営における入出庫プロセスを習得。"
            ],

            education_year_e: "2020年8月",
            International: "国際輸送管理",
            International_desc: [
                "コスト管理、流通および国内配送方法、物流サービスプロバイダー、アウトソーシングについて理解を深める。"
            ],

            education_year_f: "2020年7月",
            Demand: "需要計画",
            Demand_desc: [
                "MRP（資材所要量計画）やS&OP（販売および運用計画）プロセスなどの手法を使用した需要予測スキルを習得。"
            ],

            education_year_g: "2020年6月",
            Foundation: "サプライチェーン管理の基礎",
            Foundation_desc: [
                "サプライチェーンにおける概念と応用、運用、戦略とパフォーマンス、リスク管理を理解。"
            ],

            education_year_h: "2014年8月",
            Bachelor: "経営学学士",
            Bachelor_desc: [
                "さまざまな商品セクターにおける需給分析を含むビジネス運営の強固な基盤を構築。"
            ],

            education_year_i: "2012年8月",
            Business: "国際ビジネス学",
            Business_desc: [
                "- 輸出入手続きおよび関連書類に関する包括的な知識を習得。",
                "- 国際貿易に関する理解を深める。"
            ],

            // SKILLS
            my_skills: "私の <span>スキル</span>",
            skills_description_1: [
                "私は、管理、リーダーシップ、戦略的計画にわたる幅広いスキルセットを持っており、顧客サービスおよびプロジェクト管理の専門知識と組み合わせています。",
                "Microsoft Officeや通信技術に精通しているだけでなく、AIを活用した職場の自動化の経験も持ち、最新の技術革新に適応する能力を発揮しています。"
            ],

            AI: "AI – 職場の自動化",
            customer_service: "顧客サービス",
            project: "プロジェクト管理",
            strategic: "戦略的計画",
            telecommunication: "通信技術",
            leadership: "リーダーシップ",

            // ABOUT ME
            about_me: "自己 <span>紹介</span>",
            about_me_description: [
                "以下に簡潔に私の情報を記載しました。ぜひ、私に合った機会やコラボレーションを検討いただければ幸いです。"
            ],

            name: "名前<span>Tony Lee</span>",
            gender: "性別 <span>男性</span>",
            // age: "年齢 <span>33 歳</span>",
            status: "婚姻状況 <span>独身</span>",
            city: "居住地 <span>サイゴン</span>",
            nationality: "国籍 <span>ベトナム</span>",
            experience: "経験 <span>10年以上</span>",
            full_time: "雇用状況 <span>対応可能</span>",
            freelance: "フリーランス <span>対応可能</span>",
            phone: "電話番号 <span>+84 777 995 100</span>",
            email: "メールアドレス <span>tonylee003004@gmail.com</span>",
            languages: "言語 <span>英語、ベトナム語</span>",

            // PORTFOLIO
            lastest_project: "最新の <span>プロジェクト</span>",
            automation_1: "自動通話レポート",
            automation_1_desc: "通話後に顧客とのやり取りを要約した詳細なレポートを即座に生成します。",

            automation_2: "自動ドキュメント生成",
            automation_2_desc: "個別対応の紹介状や見積書を自動的に作成するツールを開発します。",

            automation_3: "自動通信ワークフロー",
            automation_3_desc: "ワンクリックで顧客に専門的なドキュメント（例: 見積書や紹介状）を送信するプロセスを簡素化しました。",

            live_project_1: "実際のプロジェクト",
            live_project_2: "実際のプロジェクト",
            live_project_3: "実際のプロジェクト",

            // CONTACT
            contact_1: "一緒に働きましょう",
            contact_desc_1: "私のスキルや経験があなたのお役に立てることがあれば、ぜひお気軽にご連絡ください。",

            email_1: "メールアドレス",
            address_1: "住所",
            address_1_desc: "どんな住所でも",

            contact_me: "私に連絡 <span>してください！</span>",

            fullName: "フルネーム",
            emailaddress: "メールアドレス",
            phonenumber: "電話番号",
            emailsubject: "件名",
            yourmessage: "あなたのメッセージ",

            sendmessage: "メッセージを送信する"
        }
    }

    // Tính tuổi client-side từ ngày sinh 03/04/1991 và cập nhật vào object translations
    const _birthDate = new Date(1991, 3, 3); // JS months: 0=Jan, 3=Apr
    const _today_for_age = new Date();
    let _age = _today_for_age.getFullYear() - _birthDate.getFullYear();
    const _m = _today_for_age.getMonth() - _birthDate.getMonth();
    if (_m < 0 || (_m === 0 && _today_for_age.getDate() < _birthDate.getDate())) {
        _age--;
    }
    if (translations && translations.en) translations.en.age = `Age <span>${_age} Years Old</span>`;
    if (translations && translations.ja) translations.ja.age = `年齢 <span>${_age} 歳</span>`;

    const langImages = document.querySelectorAll('.language-switcher img');
    const h2Element = document.querySelector('.home-detail h2');
    const roleSpans = document.querySelectorAll('.home-detail h2 span');

    const elementsToTranslate = {
        home: document.querySelector('header nav .hom'),
        services: document.querySelector('header nav .ser'),
        resume: document.querySelector('header nav .res'),
        porfolio: document.querySelector('header nav .por'),
        contact: document.querySelector('header nav .con'),

        // HOME
        home_description: document.querySelector('.home-detail p'),
        download: document.querySelector('.home-detail .btn-sci .btn'),

        // SERVICES
        services_content: document.querySelector('.services-content h1'),
        please: document.querySelector('.services-content p'),
        placeholder: document.querySelector('#user-input'),
        ask: document.querySelector('.services-content button'),

        // RESUME
        why_hire_me: document.querySelector('.resume-container .resume-box h2'),
        resume_description: document.querySelector('.resume-container .resume-box .desc'),
        experience_1: document.querySelector('.resume-container .resume-box .experience'),
        education: document.querySelector('.resume-container .resume-box .education'),
        skill: document.querySelector('.resume-container .resume-box .skill'),
        about: document.querySelector('.resume-container .resume-box .about'),

        my_experience: document.querySelector('.resume-box .resume-detail.experience h2'),
        resume_description_1: document.querySelector('.resume-container .resume-box .experience.desc'),

        // ------- EXPERIENCE -------
        // SONG KIM
        SK_year: document.querySelector('.resume-box .resume-item .year.SK'),
        SK_resumelist_sales: document.querySelector('.resume-box .resume-item .sales'),
        SK_tele_position: document.querySelector('.resume-box .resume-item .SK .tele-text'),
        SK_tele_achiev: document.querySelector('.resume-box .resume-item .SK .achiev-text'),
        SK_tele_desc: document.querySelector('.resume-box .resume-item .SK .tele-desc'),
        SK_achiev_desc: document.querySelector('.resume-box .resume-item .SK .achiev-desc'),

        // LONG KHANG
        LK_year: document.querySelector('.resume-box .resume-item .year.LK'),
        LK_resumelist_sales: document.querySelector('.resume-box .resume-item .sales'),
        LK_tele_position: document.querySelector('.resume-box .resume-item .LK .tele-text'),
        LK_tele_achiev: document.querySelector('.resume-box .resume-item .LK .achiev-text'),
        LK_tele_desc: document.querySelector('.resume-box .resume-item .LK .tele-desc'),
        LK_achiev_desc: document.querySelector('.resume-box .resume-item .LK .achiev-desc'),

        // CMPI
        CMPI_year: document.querySelector('.resume-box .resume-item .year.a'),
        CMPI_resumelist_sales: document.querySelector('.resume-box .resume-item .sales'),
        CMPI_tele_position: document.querySelector('.resume-box .resume-item .CMPI .tele-text'),
        CMPI_tele_achiev: document.querySelector('.resume-box .resume-item .CMPI .achiev-text'),
        CMPI_tele_desc: document.querySelector('.resume-box .resume-item .CMPI .tele-desc'),
        CMPI_achiev_desc: document.querySelector('.resume-box .resume-item .CMPI .achiev-desc'),

        // DC TECH
        year_b: document.querySelector('.resume-box .resume-item .year.b'),
        resumelist_planner: document.querySelector('.resume-box .resume-item .planner'),
        DC_manage: document.querySelector('.resume-box .resume-item .DC-tech .manage-text'),
        DC_manage_desc: document.querySelector('.resume-box .resume-item .DC-tech .manage-desc'),
        DC_sales: document.querySelector('.resume-box .resume-item .DC-tech .sales-text'),
        DC_sales_desc: document.querySelector('.resume-box .resume-item .DC-tech .sales-desc'),
        DC_achiev: document.querySelector('.resume-box .resume-item .DC-tech .achiev-text'),
        DC_achiev_desc: document.querySelector('.resume-box .resume-item .DC-tech .achiev-desc'),
    
        // PHÚ KHANG PHÁT
        year_c: document.querySelector('.resume-box .resume-item .year.c'),
        resumelist_outsourcing: document.querySelector('.resume-box .resume-item .outsourcing'),
        PKP_outsourcing: document.querySelector('.resume-box .resume-item .PKP .outsourcing-text'),
        PKP_outsourcing_desc: document.querySelector('.resume-box .resume-item .PKP .outsourcing-desc'),
        PKP_DP: document.querySelector('.resume-box .resume-item .PKP .DP-text'),
        PKP_DP_desc: document.querySelector('.resume-box .resume-item .PKP .DP-desc'),

        // APP TIMBER
        year_d: document.querySelector('.resume-box .resume-item .year.d'),
        resumelist_warehousing: document.querySelector('.resume-box .resume-item .warehousing'),
        APP_warehouse: document.querySelector('.resume-box .resume-item .APP .warehouse-text'),
        APP_wareshouse_desc: document.querySelector('.resume-box .resume-item .APP .warehouse-desc'),
        APP_ExIm: document.querySelector('.resume-box .resume-item .APP .ExIm-text'),
        APP_ExIm_desc: document.querySelector('.resume-box .resume-item .APP .ExIm-desc'),
        APP_research: document.querySelector('.resume-box .resume-item .APP .research-text'),
        APP_research_desc: document.querySelector('.resume-box .resume-item .APP .research-desc'),

        // PHÚ THỌ
        year_e: document.querySelector('.resume-box .resume-item .year.e'),
        resumelist_importExport: document.querySelector('.resume-box .resume-item .importExport'),
        phutho_ImEx: document.querySelector('.resume-box .resume-item .phutho .ImEx-text'),
        phutho_ImEx_desc: document.querySelector('.resume-box .resume-item .phutho .ImEx-desc'),
        phutho_warehouse: document.querySelector('.resume-box .resume-item .phutho .warehouse-text'),
        phutho_warehouse_desc: document.querySelector('.resume-box .resume-item .phutho .warehouse-desc'),

        // THÀNH LONG
        year_f: document.querySelector('.resume-box .resume-item .year.f'),
        resumelist_customs: document.querySelector('.resume-box .resume-item .customs'),
        TL_customs: document.querySelector('.resume-box .resume-item .TL .customs-text'),
        TL_customs_desc: document.querySelector('.resume-box .resume-item .TL .customs-desc'),
        TL_sales: document.querySelector('.resume-box .resume-item .TL .sales-text'),
        TL_sales_desc: document.querySelector('.resume-box .resume-item .TL .sales-desc'),

        // ------- EDUCATION -------
        my_education: document.querySelector('.resume-box .resume-detail.education h2'),
        education_description_1: document.querySelector('.resume-box .resume-detail.education .education.desc'),

        education_year_j: document.querySelector('.resume-box .resume-detail.education .year.j'),
        GPT_4: document.querySelector('.resume-box .resume-detail.education .GPT-4'),
        GPT_4_desc: document.querySelector('.resume-box .resume-detail.education .GPT-4.desc'),
        
        education_year_a: document.querySelector('.resume-box .resume-detail.education .year.a'),
        E_commerce: document.querySelector('.resume-box .resume-detail.education .E-commerce'),
        E_commerce_desc: document.querySelector('.resume-box .resume-detail.education .E-commerce.desc'),
        
        education_year_b: document.querySelector('.resume-box .resume-detail.education .year.b'),
        Finance: document.querySelector('.resume-box .resume-detail.education .Finance'),
        Finance_desc: document.querySelector('.resume-box .resume-detail.education .Finance.desc'),

        education_year_c: document.querySelector('.resume-box .resume-detail.education .year.c'),
        Product: document.querySelector('.resume-box .resume-detail.education .Product'),
        Product_desc: document.querySelector('.resume-box .resume-detail.education .Product.desc'),

        education_year_d: document.querySelector('.resume-box .resume-detail.education .year.d'),
        warehouse: document.querySelector('.resume-box .resume-detail.education .warehouse'),
        warehouse_desc: document.querySelector('.resume-box .resume-detail.education .warehouse.desc'),

        education_year_e: document.querySelector('.resume-box .resume-detail.education .year.e'),
        International: document.querySelector('.resume-box .resume-detail.education .International'),
        International_desc: document.querySelector('.resume-box .resume-detail.education .International.desc'),

        education_year_f: document.querySelector('.resume-box .resume-detail.education .year.f'),
        Demand: document.querySelector('.resume-box .resume-detail.education .Demand'),
        Demand_desc: document.querySelector('.resume-box .resume-detail.education .Demand.desc'),

        education_year_g: document.querySelector('.resume-box .resume-detail.education .year.g'),
        Foundation: document.querySelector('.resume-box .resume-detail.education .Foundation'),
        Foundation_desc: document.querySelector('.resume-box .resume-detail.education .Foundation.desc'),

        education_year_h: document.querySelector('.resume-box .resume-detail.education .year.h'),
        Bachelor: document.querySelector('.resume-box .resume-detail.education .Bachelor'),
        Bachelor_desc: document.querySelector('.resume-box .resume-detail.education .Bachelor.desc'),

        education_year_i: document.querySelector('.resume-box .resume-detail.education .year.i'),
        Business: document.querySelector('.resume-box .resume-detail.education .Business'),
        Business_desc: document.querySelector('.resume-box .resume-detail.education .Business.desc'),
        
        // SKILLS
        my_skills: document.querySelector('.resume-box .resume-detail.skills h2'),
        skills_description_1: document.querySelector('.resume-box .resume-detail.skills .skills.desc'),
        
        AI: document.querySelector('.resume-box .resume-detail.skills .resume-list .AI'),
        customer_service: document.querySelector('.resume-box .resume-detail.skills .resume-item .customer'),
        project: document.querySelector('.resume-box .resume-detail.skills .resume-item .project'),
        strategic: document.querySelector('.resume-box .resume-detail.skills .resume-item .strategic'),
        telecommunication: document.querySelector('.resume-box .resume-detail.skills .resume-item .telecomunications'),
        leadership: document.querySelector('.resume-box .resume-detail.skills .resume-item .leadership'),   

        // ABOUT ME
        about_me: document.querySelector('.resume-box .resume-detail.about h2'),
        about_me_description: document.querySelector('.resume-box .resume-detail.about .desc'),
        
        name: document.querySelector('.resume-box .resume-detail.about .resume-item.name p'),
        gender: document.querySelector('.resume-box .resume-detail.about .resume-item.gender p'),
        age: document.querySelector('.resume-box .resume-detail.about .resume-item.age p'),
        status: document.querySelector('.resume-box .resume-detail.about .resume-item.status p'),
        city: document.querySelector('.resume-box .resume-detail.about .resume-item.city p'),
        nationality: document.querySelector('.resume-box .resume-detail.about .resume-item.nationality p'),
        experience: document.querySelector('.resume-box .resume-detail.about .resume-item.experience p'),
        full_time: document.querySelector('.resume-box .resume-detail.about .resume-item.full-time p'),
        freelance: document.querySelector('.resume-box .resume-detail.about .resume-item.freelance p'),
        phone: document.querySelector('.resume-box .resume-detail.about .resume-item.phone p'),
        email: document.querySelector('.resume-box .resume-detail.about .resume-item.email p'),
        languages: document.querySelector('.resume-box .resume-detail.about .resume-item.languages p'),

        // PORTFOLIO
        lastest_project: document.querySelector('.portfolio .heading-project'),
        automation_1: document.querySelector('.portfolio .automation_1'),
        automation_1_desc: document.querySelector('.portfolio .automation_1_desc'),
        automation_2: document.querySelector('.portfolio .automation_2'),
        automation_2_desc: document.querySelector('.portfolio .automation_2_desc'),
        automation_3: document.querySelector('.portfolio .automation_3'),
        automation_3_desc: document.querySelector('.portfolio .automation_3_desc'),

        live_project_1: document.querySelector('.portfolio .live-github .live_1'),
        live_project_2: document.querySelector('.portfolio .live-github .live_2'),
        live_project_3: document.querySelector('.portfolio .live-github .live_3'),

        // CONTACT
        contact_1: document.querySelector('.contact h2'),
        contact_desc_1: document.querySelector('.contact .desc'),

        email_1: document.querySelector('.contact .contact-detail.two .email'),
        address_1: document.querySelector('.contact .contact-detail.three .address'),
        address_1_desc: document.querySelector('.contact .contact-detail.three .any_address'),

        contact_me: document.querySelector('.contact .contact-box.box .heading-contact'),

        fullName: document.querySelector('input[name="full_name"]'),
        emailaddress: document.querySelector('input[name="email"]'),
        phonenumber: document.querySelector('input[name="phone"]'),
        emailsubject: document.querySelector('input[name="subject"]'),
        yourmessage: document.querySelector('textarea[name="message"]'),

        sendmessage: document.querySelector('.contact .contact-box.box button')
    }

    function switchLanguage(lang) {
        // Dịch các phần tử cố định
        Object.keys(elementsToTranslate).forEach(key => {
            if (elementsToTranslate[key]) {
                elementsToTranslate[key].textContent = translations[lang][key];
                
                if (key === 'placeholder') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                } else if (key === 'my_experience') {
                    // Update my experience with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'my_education') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'my_skills') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'about_me') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'name') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'gender') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'age') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'status') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'city') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'nationality') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'experience') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'full_time') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'freelance') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'phone') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'email') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                }  else if (key === 'languages') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'lastest_project') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if (key === 'contact_me') {
                    // Update my education with innerHTML for span handling
                    elementsToTranslate[key].innerHTML = translations[lang][key];
                } else if(key === 'fullName') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                } else if(key === 'emailaddress') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                } else if(key === 'phonenumber') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                } else if(key === 'emailsubject') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                } else if(key === 'yourmessage') {
                    // Update placeholder attribute
                    elementsToTranslate[key].setAttribute('placeholder', translations[lang][key]);
                    elementsToTranslate[key].textContent = ''; // Xóa nội dung
                } else if (Array.isArray(translations[lang][key])) {
                    // If the key is an array (like home_description), join with <br> for line breaks
                    elementsToTranslate[key].innerHTML = translations[lang][key].join('<br>');
                } else {
                    elementsToTranslate[key].textContent = translations[lang][key];
                }
            }
        });
        
        // Cập nhật nội dung h2
        h2Element.firstChild.textContent = translations[lang].h2;

        // Cập nhật các vai trò (roles)
        translations[lang].roles.forEach((role, index) => {
            if (roleSpans[index]) {
                roleSpans[index].setAttribute('data-text', role);
                roleSpans[index].textContent = role;
            }
        });

        // Cập nhật trạng thái lá cờ
        langImages.forEach(img => img.classList.remove('active'));
        document.getElementById(`lang-${lang}`).classList.add('active');
    }

    // Gán sự kiện cho lá cờ
    langImages.forEach(img => {
        img.addEventListener('click', () => {
            const selectedLang = img.id.split('-')[1];
            switchLanguage(selectedLang);

        });
    });

    // Ngôn ngữ mặc định
    switchLanguage('en');
})

/*=============== BREAKPOINT =============== */
const menuIcon = document.querySelector("#menu-icon")
const navbar_1 = document.querySelector('header nav');

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('bx-x')
    navbar_1.classList.toggle('active')
})



