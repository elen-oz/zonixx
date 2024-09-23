export interface Exercise {
    id: string;
    name: string;
    bodyPart: string;
    equipment: string;
    gifUrl: string;
    target: string;
    secondaryMuscles: string[];
    instructions: string[];
}

export const exercises: Exercise[] = [
    {
        id: "5000",
        name: "Burpee",
        bodyPart: "full body",
        equipment: "body weight",
        gifUrl: "",
        target: "cardiovascular system",
        secondaryMuscles: ["chest", "shoulders", "legs", "abs"],
        instructions: [
            "Start in a standing position",
            "Drop into a squat and place hands on the ground",
            "Kick feet back into a plank position",
            "Perform a push-up",
            "Jump feet back to hands",
            "Jump up with hands raised above head"
        ]
    },
    {
        id: "5001",
        name: "Push-up",
        bodyPart: "chest",
        equipment: "body weight",
        gifUrl: "",
        target: "pectorals",
        secondaryMuscles: ["triceps", "shoulders", "abs"],
        instructions: [
            "Start in a plank position with hands slightly wider than shoulder-width",
            "Lower body until chest nearly touches the ground",
            "Push body back up to starting position",
            "Repeat"
        ]
    },
    {
        id: "5002",
        name: "Air Squat",
        bodyPart: "legs",
        equipment: "body weight",
        gifUrl: "",
        target: "quads",
        secondaryMuscles: ["glutes", "hamstrings", "calves"],
        instructions: [
            "Stand with feet shoulder-width apart",
            "Lower body as if sitting back into a chair",
            "Keep chest up and knees in line with toes",
            "Lower until thighs are parallel to ground",
            "Push through heels to return to standing position"
        ]
    },
    {
        id: "5003",
        name: "Sit-up",
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "",
        target: "abs",
        secondaryMuscles: ["hip flexors", "lower back"],
        instructions: [
            "Lie on back with knees bent and feet flat on the ground",
            "Cross arms over chest or place hands behind ears",
            "Lift upper body off the ground towards knees",
            "Lower back down to starting position"
        ]
    },
    {
        id: "5004",
        name: "Plank",
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "",
        target: "abs",
        secondaryMuscles: ["shoulders", "chest", "glutes"],
        instructions: [
            "Start in a push-up position with forearms on the ground",
            "Keep body in a straight line from head to heels",
            "Engage core and hold position"
        ]
    },
    {
        id: "5005",
        name: "Mountain Climber",
        bodyPart: "full body",
        equipment: "body weight",
        gifUrl: "",
        target: "cardiovascular system",
        secondaryMuscles: ["shoulders", "abs", "quads"],
        instructions: [
            "Start in a push-up position",
            "Bring right knee towards chest",
            "Quickly switch and bring left knee in while extending right leg back",
            "Continue alternating legs in a running motion"
        ]
    },
    {
        id: "5006",
        name: "Kettlebell Swing",
        bodyPart: "full body",
        equipment: "kettlebell",
        gifUrl: "",
        target: "glutes",
        secondaryMuscles: ["hamstrings", "abs", "shoulders"],
        instructions: [
            "Stand with feet shoulder-width apart, kettlebell between feet",
            "Hinge at hips and grasp kettlebell with both hands",
            "Swing kettlebell back between legs",
            "Thrust hips forward to swing kettlebell up to chest height",
            "Allow kettlebell to fall back between legs and repeat"
        ]
    },
    {
        id: "5007",
        name: "Box Jump",
        bodyPart: "lower legs",
        equipment: "body weight",
        gifUrl: "",
        target: "calves",
        secondaryMuscles: ["quads", "glutes", "hamstrings"],
        instructions: [
            "Stand facing a sturdy box",
            "Bend knees and swing arms back",
            "Jump onto box, landing softly with both feet",
            "Stand up straight on box",
            "Step or jump back down and repeat"
        ]
    },
    {
        id: "5008",
        name: "Wall Ball",
        bodyPart: "full body",
        equipment: "medicine ball",
        gifUrl: "",
        target: "quads",
        secondaryMuscles: ["shoulders", "triceps", "abs"],
        instructions: [
            "Stand facing a wall with medicine ball at chest level",
            "Perform a squat",
            "As you stand, throw the ball at a target on the wall",
            "Catch the ball as it rebounds and immediately squat again"
        ]
    },
    {
        id: "5009",
        name: "Double Under",
        bodyPart: "cardio",
        equipment: "rope",
        gifUrl: "",
        target: "cardiovascular system",
        secondaryMuscles: ["calves", "shoulders", "forearms"],
        instructions: [
            "Hold jump rope handles and position rope behind you",
            "Jump and swing rope under feet twice per jump",
            "Land softly and immediately prepare for next jump",
            "Maintain a steady rhythm"
        ]
    },
    {
        id: "5010",
        name: "Thruster",
        bodyPart: "full body",
        equipment: "barbell",
        gifUrl: "",
        target: "quads",
        secondaryMuscles: ["shoulders", "triceps", "abs"],
        instructions: [
            "Start with barbell at shoulder height, elbows forward",
            "Perform a front squat",
            "As you stand, press the barbell overhead",
            "Lower barbell back to shoulders and repeat"
        ]
    },
    {
        id: "5011",
        name: "Rowing",
        bodyPart: "cardio",
        equipment: "body weight",
        gifUrl: "",
        target: "cardiovascular system",
        secondaryMuscles: ["lats", "quads", "biceps"],
        instructions: [
            "Sit on rower with feet secured on footrests",
            "Grab handle and extend arms, leaning slightly forward",
            "Push with legs while pulling handle to chest",
            "Return to starting position and repeat"
        ]
    },
    {
        id: "5012",
        name: "Deadlift",
        bodyPart: "back",
        equipment: "barbell",
        gifUrl: "",
        target: "glutes",
        secondaryMuscles: ["hamstrings", "lower back", "traps"],
        instructions: [
            "Stand with feet hip-width apart, barbell over feet",
            "Bend at hips and knees to lower and grasp barbell",
            "Lift bar by extending hips and knees",
            "Stand up straight with barbell at hip level",
            "Lower bar back to ground with controlled motion"
        ]
    },
    {
        id: "5013",
        name: "Pull-up",
        bodyPart: "back",
        equipment: "body weight",
        gifUrl: "",
        target: "lats",
        secondaryMuscles: ["biceps", "forearms", "abs"],
        instructions: [
            "Hang from pull-up bar with palms facing away",
            "Pull body up until chin is above the bar",
            "Lower body back down with control",
            "Repeat"
        ]
    },
    {
        id: "5014",
        name: "Dip",
        bodyPart: "upper arms",
        equipment: "body weight",
        gifUrl: "",
        target: "triceps",
        secondaryMuscles: ["chest", "shoulders"],
        instructions: [
            "Support body on parallel bars with arms straight",
            "Lower body by bending elbows",
            "Push body back up to starting position",
            "Repeat"
        ]
    },
    {
        id: "5015",
        name: "Handstand Push-up",
        bodyPart: "shoulders",
        equipment: "body weight",
        gifUrl: "",
        target: "delts",
        secondaryMuscles: ["triceps", "traps", "abs"],
        instructions: [
            "Kick up into a handstand against a wall",
            "Lower body by bending elbows",
            "Push body back up to starting position",
            "Repeat"
        ]
    },
    {
        id: "5016",
        name: "Toes-to-Bar",
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "",
        target: "abs",
        secondaryMuscles: ["hip flexors", "lats"],
        instructions: [
            "Hang from pull-up bar with palms facing away",
            "Lift legs and touch toes to the bar",
            "Lower legs back down with control",
            "Repeat"
        ]
    },
    {
        id: "5017",
        name: "Assault Bike",
        bodyPart: "cardio",
        equipment: "stationary bike",
        gifUrl: "",
        target: "cardiovascular system",
        secondaryMuscles: ["quads", "shoulders", "abs"],
        instructions: [
            "Sit on assault bike and grab handles",
            "Start pedaling while pushing and pulling the handles",
            "Maintain a steady pace or follow interval protocol"
        ]
    },
    {
        id: "5018",
        name: "Russian Twist",
        bodyPart: "waist",
        equipment: "medicine ball",
        gifUrl: "",
        target: "abs",
        secondaryMuscles: ["obliques", "lower back"],
        instructions: [
            "Sit on floor with knees bent and feet lifted slightly",
            "Hold medicine ball at chest level",
            "Lean back slightly, keeping back straight",
            "Rotate torso to right, then to left",
            "Continue alternating sides"
        ]
    },
    {
        id: "5019",
        name: "Snatch",
        bodyPart: "full body",
        equipment: "barbell",
        gifUrl: "",
        target: "quads",
        secondaryMuscles: ["shoulders", "triceps", "back", "glutes"],
        instructions: [
            "Start with barbell on ground, feet hip-width apart",
            "Bend at hips and knees, grasp barbell with wide grip",
            "Explosively extend hips and knees",
            "Shrug shoulders and pull barbell overhead",
            "Catch barbell overhead in a squat position",
            "Stand up straight with barbell overhead"
        ]
    }
];