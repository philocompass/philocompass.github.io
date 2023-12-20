const questions = [
    {
        text: "Do you think reality is mostly physical things you can touch and see or more about thoughts and consciousness?",
        dichotomy: "Materialism vs. Idealism",
        options: ["Physical Things", "Thoughts and Consciousness"]
    },
    {
        text: "Is the mind just a function of the brain or something beyond the physical?",
        dichotomy: "Materialism vs. Idealism",
        options: ["Function of the Brain", "Beyond the Physical"]
    },
    {
        text: "Are feelings like love and beauty based on physical things or purely in our minds?",
        dichotomy: "Materialism vs. Idealism",
        options: ["Based on Physical Things", "Purely in Our Minds"]
    },
    // {
    //     text: "Do you trust more in logical reasoning or sensory experience to gain knowledge?",
    //     dichotomy: "Rationalism vs. Empiricism",
    //     options: ["Logical Reasoning", "Sensory Experience"]
    // },
    // {
    //     text: "Do you think mathematical truths are obvious without empirical proof or need real-world testing?",
    //     dichotomy: "Rationalism vs. Empiricism",
    //     options: ["Obvious Without Proof", "Need Real-World Testing"]
    // },
    // {
    //     text: "Are some ideas born inside us or do we learn everything through experience?",
    //     dichotomy: "Rationalism vs. Empiricism",
    //     options: ["Born Inside Us", "Learn Through Experience"]
    // },
    // {
    //     text: "Do you believe in the existence of free will or is everything predetermined?",
    //     dichotomy: "Libertarianism vs. Determinism",
    //     options: ["Free Will", "Predetermined"]
    // },
    // {
    //     text: "Do you think our choices are completely our own or shaped by external factors?",
    //     dichotomy: "Libertarianism vs. Determinism",
    //     options: ["Completely Our Own", "Shaped by External Factors"]
    // },
    // {
    //     text: "Should people be blamed for their actions since they're free to choose or not since their actions are already set?",
    //     dichotomy: "Libertarianism vs. Determinism",
    //     options: ["Blamed since Free to Choose", "Not Blamed since Actions Already Set"]
    // },
    // {
    //     text: "Do scientific theories reveal true facts about the world or are they just helpful ways to think?",
    //     dichotomy: "Realism vs. Anti-Realism",
    //     options: ["Reveal True Facts", "Just Helpful Ways to Think"]
    // },
    // {
    //     text: "Are right and wrong the same for everyone or do they vary between people?",
    //     dichotomy: "Realism vs. Anti-Realism",
    //     options: ["Same for Everyone", "Vary Between People"]
    // },
    // {
    //     text: "Does the world exist the same way whether we see it or not or is it shaped by how we think?",
    //     dichotomy: "Realism vs. Anti-Realism",
    //     options: ["Exists Same Way", "Shaped by How We Think"]
    // },
    // {
    //     text: "Is everything in the universe made of the same kind of stuff or are there different kinds for mind and body?",
    //     dichotomy: "Monism vs. Dualism",
    //     options: ["Same Kind of Stuff", "Different Kinds for Mind and Body"]
    // },
    // {
    //     text: "Is our consciousness just part of our physical brain or something separate?",
    //     dichotomy: "Monism vs. Dualism",
    //     options: ["Part of Our Physical Brain", "Something Separate"]
    // },
    // {
    //     text: "Is everything in the universe connected as one or made of two different parts like mind and matter?",
    //     dichotomy: "Monism vs. Dualism",
    //     options: ["Connected as One", "Two Different Parts"]
    // },
    // {
    //     text: "Should ethical choices focus on the results they produce or on following certain rules?",
    //     dichotomy: "Utilitarianism vs. Deontological Ethics",
    //     options: ["Focus on Results", "Following Certain Rules"]
    // },
    // {
    //     text: "Is an action good or bad based on its outcomes or based on whether it's right or wrong in itself?",
    //     dichotomy: "Utilitarianism vs. Deontological Ethics",
    //     options: ["Based on Outcomes", "Right or Wrong in Itself"]
    // },
    // {
    //     text: "Is it acceptable to sacrifice one for the greater good or should individual rights always be respected?",
    //     dichotomy: "Utilitarianism vs. Deontological Ethics",
    //     options: ["Sacrifice for Greater Good", "Individual Rights Always Respected"]
    // },
    // {
    //     text: "Do you think life has no built-in meaning or that we make our own meaning?",
    //     dichotomy: "Nihilism vs. Existentialism",
    //     options: ["No Built-In Meaning", "We Make Our Own Meaning"]
    // },
    // {
    //     text: "Is looking for a life purpose pointless or a personal duty?",
    //     dichotomy: "Nihilism vs. Existentialism",
    //     options: ["Pointless", "Personal Duty"]
    // },
    // {
    //     text: "Are moral values pointless or up to each person to decide?",
    //     dichotomy: "Nihilism vs. Existentialism",
    //     options: ["Pointless", "Up to Each Person"]
    // },
    // {
    //     text: "Are there universal truths or do truths depend on context and perspective?",
    //     dichotomy: "Absolutism vs. Relativism",
    //     options: ["Universal Truths", "Depend on Context and Perspective"]
    // },
    // {
    //     text: "Should the same moral rules apply to everyone or change with different cultures and situations?",
    //     dichotomy: "Absolutism vs. Relativism",
    //     options: ["Same for Everyone", "Change with Cultures and Situations"]
    // },
    // {
    //     text: "Is beauty an objective quality or does it depend on the observer?",
    //     dichotomy: "Absolutism vs. Relativism",
    //     options: ["Objective Quality", "Depends on the Observer"]
    // },
    // {
    //     text: "Do you prioritize individual rights and freedoms or the needs of the community?",
    //     dichotomy: "Individualism vs. Collectivism",
    //     options: ["Individual Rights and Freedoms", "Needs of the Community"]
    // },
    // {
    //     text: "Is it more important to follow your own path or to ensure group well-being?",
    //     dichotomy: "Individualism vs. Collectivism",
    //     options: ["Follow Your Own Path", "Ensure Group Well-being"]
    // },
    // {
    //     text: "Do you value being independent more than being connected to others?",
    //     dichotomy: "Individualism vs. Collectivism",
    //     options: ["Being Independent", "Being Connected to Others"]
    // },
    // {
    //     text: "Should all beliefs be questioned or are there certain truths we should accept without doubt?",
    //     dichotomy: "Skepticism vs. Dogmatism",
    //     options: ["Question All Beliefs", "Accept Certain Truths Without Doubt"]
    // },
    // {
    //     text: "Is it more important to keep an open mind or to hold firm beliefs?",
    //     dichotomy: "Skepticism vs. Dogmatism",
    //     options: ["Keep an Open Mind", "Hold Firm Beliefs"]
    // },
    // {
    //     text: "Do you prefer to challenge established ideas or to trust in established truths?",
    //     dichotomy: "Skepticism vs. Dogmatism",
    //     options: ["Challenge Established Ideas", "Trust in Established Truths"]
    // },
    // {
    //     text: "Do you think mathematical concepts are created by people or exist on their own?",
    //     dichotomy: "Mathematical Nominalism vs. Mathematical Realism",
    //     options: ["Created by People", "Exist on Their Own"]
    // },
    // {
    //     text: "Are numbers and shapes just ideas or real things?",
    //     dichotomy: "Mathematical Nominalism vs. Mathematical Realism",
    //     options: ["Just Ideas", "Real Things"]
    // },
    // {
    //     text: "Is mathematics invented by humans or a discovery about how the universe works?",
    //     dichotomy: "Mathematical Nominalism vs. Mathematical Realism",
    //     options: ["Invented by Humans", "Discovery About the Universe"]
    // },
    // {
    //     text: "Does science progress by collecting more evidence or by proving ideas wrong?",
    //     dichotomy: "Inductivism vs. Falsificationism",
    //     options: ["Collecting More Evidence", "Proving Ideas Wrong"]
    // },
    // {
    //     text: "Should scientific work aim to prove theories right or to test them until they fail?",
    //     dichotomy: "Inductivism vs. Falsificationism",
    //     options: ["Prove Theories Right", "Test Them Until They Fail"]
    // },
    // {
    //     text: "In science, is it more important to support existing ideas or to keep questioning and updating them?",
    //     dichotomy: "Inductivism vs. Falsificationism",
    //     options: ["Support Existing Ideas", "Keep Questioning and Updating"]
    // },
    // {
    //     text: "Do you see scientific theories as just ways to predict things or as true explanations of how the world works?",
    //     dichotomy: "Instrumentalism vs. Scientific Realism",
    //     options: ["Just Ways to Predict", "True Explanations of the World"]
    // },
    // {
    //     text: "Is the value of science in what it can do for us or in how accurately it explains things?",
    //     dichotomy: "Instrumentalism vs. Scientific Realism",
    //     options: ["What It Can Do for Us", "How Accurately It Explains Things"]
    // },
    // {
    //     text: "Should we value a scientific idea for its practical use or for how well it describes reality?",
    //     dichotomy: "Instrumentalism vs. Scientific Realism",
    //     options: ["Its Practical Use", "How Well It Describes Reality"]
    // },
    // {
    //     text: "Is everything in the future already set by physical laws or can it happen by chance?",
    //     dichotomy: "Determinism vs. Indeterminism",
    //     options: ["Already Set by Physical Laws", "Can Happen by Chance"]
    // },
    // {
    //     text: "Do you think everything happens for a reason or sometimes without any cause?",
    //     dichotomy: "Determinism vs. Indeterminism",
    //     options: ["Happens for a Reason", "Sometimes Without Any Cause"]
    // },
    // {
    //     text: "Can everything in the universe be predicted or are there elements of chance and unpredictability?",
    //     dichotomy: "Determinism vs. Indeterminism",
    //     options: ["Can Be Predicted", "Elements of Chance and Unpredictability"]
    // },
    // {
    //     text: "Do we build our own knowledge or find it waiting for us?",
    //     dichotomy: "Constructivism vs. Objectivism",
    //     options: ["Build Our Own Knowledge", "Find It Waiting for Us"]
    // },
    // {
    //     text: "Are truths different for each person or the same for everyone?",
    //     dichotomy: "Constructivism vs. Objectivism",
    //     options: ["Different for Each Person", "Same for Everyone"]
    // },
    // {
    //     text: "Is learning about making sense of things in your own way or about finding out how things really are?",
    //     dichotomy: "Constructivism vs. Objectivism",
    //     options: ["Making Sense in Your Own Way", "Finding Out How Things Really Are"]
    // },
    // {
    //     text: "Do you see probability as the chance of something happening over many tries or as how strongly you believe it will happen?",
    //     dichotomy: "Frequentism vs. Bayesianism",
    //     options: ["Chance Over Many Tries", "How Strongly You Believe It Will Happen"]
    // },
    // {
    //     text: "Is probability about how often something has happened before or about what you think will happen based on what you know?",
    //     dichotomy: "Frequentism vs. Bayesianism",
    //     options: ["How Often It Has Happened Before", "What You Think Will Happen"]
    // },
    // {
    //     text: "Do you think of probability as a fixed number based on facts or as something that changes with new information?",
    //     dichotomy: "Frequentism vs. Bayesianism",
    //     options: ["Fixed Number Based on Facts", "Changes with New Information"]
    // },
    // {
    //     text: "Should science rely only on facts that can be proven or be open to new interpretations?",
    //     dichotomy: "Logical Positivism vs. Post-Positivism",
    //     options: ["Rely on Facts That Can Be Proven", "Be Open to New Interpretations"]
    // },
    // {
    //     text: "Should science ignore ideas that cannot be tested or explore them for possible value?",
    //     dichotomy: "Logical Positivism vs. Post-Positivism",
    //     options: ["Ignore Ideas That Cannot Be Tested", "Explore for Possible Value"]
    // },
    // {
    //     text: "Is science about finding final answers or constantly improving our knowledge?",
    //     dichotomy: "Logical Positivism vs. Post-Positivism",
    //     options: ["Finding Final Answers", "Constantly Improving Our Knowledge"]
    // },
    // {
    //     text: "Does the truth change based on the situation or stay the same no matter what?",
    //     dichotomy: "Contextualism vs. Invariantism",
    //     options: ["Change Based on the Situation", "Stay the Same No Matter What"]
    // },
    // {
    //     text: "Should we judge knowledge based on where and when it is used or is it always the same?",
    //     dichotomy: "Contextualism vs. Invariantism",
    //     options: ["Judge Based on Where and When Used", "Always the Same"]
    // },
    // {
    //     text: "Should our understanding of what counts as knowledge change with different conditions or be fixed?",
    //     dichotomy: "Contextualism vs. Invariantism",
    //     options: ["Change with Different Conditions", "Be Fixed"]
    // },
    // {
    //     text: "Is everything in the world physical or are there things beyond the physical?",
    //     dichotomy: "Physicalism vs. Non-Physicalism",
    //     options: ["Everything is Physical", "Things Beyond the Physical"]
    // },
    // {
    //     text: "Can everything be explained by physical science or are some things beyond scientific explanation?",
    //     dichotomy: "Physicalism vs. Non-Physicalism",
    //     options: ["Everything Explained by Science", "Some Things Beyond Science"]
    // },
    // {
    //     text: "In studying the mind, should we only look at the brain and body or also consider something more than physical?",
    //     dichotomy: "Physicalism vs. Non-Physicalism",
    //     options: ["Only Look at Brain and Body", "Consider More Than Physical"]
    // },
    // {
    //     text: "To understand complex things, should we break them down into parts or look at them as whole systems?",
    //     dichotomy: "Reductionism vs. Holism",
    //     options: ["Break Down Into Parts", "Look at Them as Whole Systems"]
    // },
    // {
    //     text: "Should science focus on the small pieces of things or on how everything works together?",
    //     dichotomy: "Reductionism vs. Holism",
    //     options: ["Focus on Small Pieces", "How Everything Works Together"]
    // },
    // {
    //     text: "Is it more important to understand the small parts of things or how they connect and interact?",
    //     dichotomy: "Reductionism vs. Holism",
    //     options: ["Understand the Small Parts", "How They Connect and Interact"]
    // }
];
