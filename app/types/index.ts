// Types for the Request Body for the SignUp:
export interface RequestBody {
    name: string;
    email: string;
    password: string;
}

// Types for the Project Page:
export interface Project {
    id: number;
    name: string;
    category: string;
    group: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    language: string;
    description: string;
    features: string[];
    learningOutcomes: string[];
    desktopImage: string;
    mobileImage: string;
}
export interface ProjectCardProps {
    project: Project;
    index: number;
    onClick: (project: Project) => void;
}
export interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

// Types for the Pathway Page:
export type Pathway = {
    title: string;
    description: string;
    color: string;
    niche: string;
    domain: string;
    careers: {
        title: string;
        description: string;
        skills: string;
        opportunities: string;
    }[],
    challenges: {
        title: string;
        description: string;
        opportunity: string;
    }[],
    skills: {
        name: string;
        description: string;
    }[],
    trends: {
        name: string;
        description: string;
    }[]
};
export interface PathwayDetailsProps {
    pathway: Pathway;
    onBack: () => void;
}