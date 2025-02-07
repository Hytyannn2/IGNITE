document.addEventListener('DOMContentLoaded', function() {
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            subject: params.get('subject'),
            tingkatan: params.get('tingkatan') // ensure lowercase
        };
    }

    function setPageContent() {
        const { subject, tingkatan } = getQueryParams();
        if (subject && tingkatan) {
            document.title = `${subject} Form ${tingkatan}`
            document.getElementById('subject-title').textContent = `${subject} Form ${tingkatan}`;
            const chapters = getChapters(subject, tingkatan);
            const chapterContainer = document.getElementById('chapters');
            chapterContainer.innerHTML = '';

            chapters.forEach((chapter, index) => {
                const chapterBox = document.createElement('div');
                chapterBox.classList.add('chapter-box');

                const icon = document.createElement('img');
                icon.src = `../media/icons/${subject}_${tingkatan}_${index + 1}.png`;
                icon.alt = `Chapter ${index + 1} Icon`;

                const chapterText = document.createElement('span');
                chapterText.textContent = chapter;

                chapterBox.appendChild(icon);
                chapterBox.appendChild(chapterText);
                chapterContainer.appendChild(chapterBox);

                // redirect
                chapterBox.addEventListener('click', () => {
                    window.location.href = `subtopic.html?subject=${encodeURIComponent(subject)}&tingkatan=${tingkatan}&chapter=${index + 1}`;
                });
            });
        } else {
            if (window.location.pathname !== '/index.html'){
                document.title = 'IGNITE Lite';
                document.getElementById('subject-title').textContent = 'Subject Not Found';
                document.getElementById('chapters').innerHTML = '<div>No chapters available</div>';
            }
            
        }
    }

    function getChapters(subject, tingkatan) {
        const chapters = {
            //chapters data

            "Chemistry": {
                "4": ["Chapter 1: Introduction to Chemistry", "Chapter 2: Matter and Atomic Structure", "Chapter 3: The Mole Concept, Chemical Formula and Equation", "Chapter 4: The Periodic Table of Elements", "Chapter 5: Chemical Bond", "Chapter 6: Acid, Base and Salt", "Chapter 7: Rate of Reaction", "Chapter 8: Manufactured Substances in Industry"],
                "5": ["Chapter 1: Redox Equilibrium", "Chapter 2: Carbon Compound", "Chapter 3: Thermochemistry", "Chapter 4: Polymer", "Chapter 5: Consumer and Industrial Chemistry"]
            },
            "English": {
                "4": ["Chapter 1: Vocabulary", "Chapter 2: Grammar", "Chapter 3: Literature"],
                "5": ["Chapter 1: Advanced Grammar", "Chapter 2: Essay Writing", "Chapter 3: Literature Analysis"]
            },
            "Physics": {
                "4": ["Chapter 1: Measurement", "Chapter 2: Force and Motion I", "Chapter 3: Gravitation","Chapter 4: Heat","Chapter 5: Waves","Chapter 6: Light and Optics"],
                "5": ["Chapter 1: Force and Motion II", "Chapter 2: Pressure", "Chapter 3: Electricity", "Chapter 4: Electromagnetism", "Chapter 5: Electronics", "Chapter 6: Nuclear Physics", "Chapter 7: Quantum Physics"]
            },
            "Sejarah":{
                "4": ["Chapter 1: Warisan Negara Bangsa", "Chapter 2: Kebangkitan Nasionalisme", "Chapter 3: Konflik Dunia dan Pendudukan Jepun di Negara Kita", "Chapter 4: Era Peralihan Kuasa British di Negara Kita", "Chapter 5: Persekutuan Tanah Melayu 1948", "Chapter 6: Ancaman Komunis dan Perisytiharan Darurat"],
                "5": ["Chapter 1: Kedaulatan Negara", "Chapter 2: Perlembagaan Persekutuan", "Chapter 3: Raja Berpelembagaan dan Demokrasi Berparlimen", "Chapter 4: Sistem Persekutuan", "Chapter 5: Pembentukan Malaysia", "Chapter 6: Cabaran Selepas Pembentukan Malaysia", "Chapter 7: Membina Kesejahteraan Negara", "Chapter 8: Membina Kemakmuran Negara" , "Chapter 9: Dasar Luar Malaysia" , "Chapter 10: Kecemerlangan Malaysia di Persada Dunia"]
            },
            "Additional Mathematics":{
                "4": ["Chapter 1: Functions", "Chapter 2: Quadratic Functions", "Chapter 3: Systems of Equations", "Chapter 4: Indices, Surds and Logarithms", "Chapter 5: Progressions", "Chapter 6: Linear Law" , "Chapter 7: Coordinate Geometry" , "Chapter 8: Vectors" , "Chapter 9: Solution of Triangles", "Chapter 10: Index Number"  ],
                "5": ["Chapter 1: Circular Measure", "Chapter 2: Differentiation", "Chapter 3: Integration", "Chapter 4: Permutation and Combination", "Chapter 5: Probability Distribution", "Chapter 6: Trigonometric Functions" , "Chapter 7: Linear Programming" , "Chapter 8: Kinematics of Linear Motion"]
            },
            "Biology":{
                "4": ["Chapter 1: Introduction to Biology and Laboratory Rules", "Chapter 2: Cell Biology and Organisation", "Chapter 3: Movement of Substances across a Plasma Membrane", "Chapter 4: Chemical Compositions in a Cell", "Chapter 5: Metabolism and Enzymes", "Chapter 6: Cell Division", "Chapter 7: Cellular Respiration", "Chapter 8: Respiratory System in Humans and Animals", "Chapter 9: Nutrition and the Human Digestive System", "Chapter 10: Transport in Humans and Animals", "Chapter 11: Immunity in Humans", "Chapter 12: Coordination and Response in Humans ", "Chapter 13: Homeostasis and the Human Urinary System", "Chapter 14: Support and Movement in Humans and Animals", "Chapter 15: Sexual Reproduction, Development and Growth in Humans and Animals"],
                "5": ["Chapter 1: Organisation of Plant Tissues and Growth", "Chapter 2: Leaf Structure and Function", "Chapter 3: Nutrition in Plants", "Chapter 4: Transport in Plants", "Chapter 5: Response in Plants", "Chapter 6: Sexual Reproduction in Flowering Plants", "Chapter 7: Adaptations of Plants in Different Habitats", "Chapter 8: Biodiversity", "Chapter 9: Ecosystem", "Chapter 10: Enviromental Sustainability", "Chapter 11: Inheritance", "Chapter 12: Variation", "Chapter 13: Genetic Technology"]
            },
            "Mathematics":{
                "4": ["Chapter 1: Quadratic Functions and Equations in One Variable ", "Chapter 2: Number Bases", "Chapter 3: Logical Reasoning", "Chapter 4: Operation on Sets", "Chapter 5: Network in Graph Theory", "Chapter 6: Linear Inequalities in Two Variables", "Chapter 7: Graphs of Motion", "Chapter 8: Measures of Dispersion for Ungrouped Data", "Chapter 9: Probability of Combined Events", "Chapter 10: Consumer Mathematics: Financial Management"],
                "5": ["Chapter 1: Variation", "Chapter 2: Matrices", "Chapter 3: Consumer Mathematics: Insurance", "Chapter 4: Consumer Mathematics: Taxation", "Chapter 5: Congruency, Enlargement and Combined Transformations", "Chapter 6: Ratios and Graphs of Trigonometric Functions", "Chapter 7: Measures of Dispersion for Grouped Data", "Chapter 8: Mathematical Modeling"]
            },
            "Pendidikan Islam":{
                "4": ["Chapter 1: Al-Quran", "Chapter 2: Hadith", "Chapter 3: Akidah", "Chapter 4: Fiqah", "Chapter 5: Sirah dan Tamadun Islam"],
                "5": ["Chapter 1: Al-Quran", "Chapter 2: Hadith", "Chapter 3: Akidah", "Chapter 4: Fiqah", "Chapter 5: Sirah dan Tamadun Islam", "Chapter 6: Akhlak Islamiah"]
            }
        };

        return chapters[subject] && chapters[subject][tingkatan] || [];
    }



    setPageContent();
});
function goBack() {
    window.history.back();
}
