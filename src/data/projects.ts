export const featuredProject = {
  title: ['Multimodal Emotion Recognition', 'using Cross-Attention Transformers'],
  eyebrow: 'Featured project · Team of four',
  problem:
    'A face and a voice each carry part of how someone feels. This project reads both together: facial expressions and audio signals are encoded separately, then fused to classify emotion from their combined representation.',
  approach: [
    { title: 'Video encoder', text: 'A Vision Transformer-based encoder turns facial video into a video representation.' },
    { title: 'Audio encoder', text: 'A CNN-based encoder turns the audio signal into an audio representation.' },
    { title: 'Cross-attention fusion', text: 'A custom cross-attention transformer module combines the two representations.' },
    { title: 'Classification', text: 'A softmax classifier predicts the emotion from the fused representation.' },
  ],
  stack: ['PyTorch', 'TorchAudio', 'OpenCV', 'Scikit-learn', 'Matplotlib'],
  contribution: [
    'Led a team of four, delegating responsibilities based on team strengths and tracking progress to keep milestones on schedule.',
    'Built the multimodal emotion classification system combining facial expressions and audio signals.',
    'Implemented the CNN-based audio encoder, the ViT-based video encoder, and the custom cross-attention fusion module.',
  ],
  evaluation: [
    'Accuracy',
    'Classification reports',
    'Confusion matrices',
  ],
  evaluationNote: 'Evaluation used Scikit-learn and Matplotlib.',
  links: [{ label: 'View repository', href: 'https://github.com/mokshaaa31/emotion-project' }],
}

export type ProjectEntry = {
  name: string
  context: string
  description: string
  tech: string[]
  href?: string
  hrefLabel?: string
}

export const otherProjects: ProjectEntry[] = [
  {
    name: 'Employee Salary Prediction',
    context: 'High Go Info Solutions · 2025',
    description:
      'An interactive Streamlit application that estimates employee salary ranges from role, experience, location, age, and other inputs, with both CSV-based and manual entry.',
    tech: ['Streamlit', 'Git', 'GitHub'],
    href: 'https://github.com/mokshaaa31/Employee-Salary-Prediction---Mokshagna.M',
    hrefLabel: 'GitHub',
  },
  {
    name: 'Grab the Deals',
    context: 'Avison Technologies · Contributed to development & testing',
    description:
      'A deals and coupons aggregation platform with AI-powered deal validation, affiliate network integration, an admin dashboard, PWA support, and native iOS and Android apps via Capacitor.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
  },
  {
    name: 'eHundi',
    context: 'Avison Technologies · Contributed to development & testing',
    description:
      'A multi-tenant donation platform connecting devotees with verified temples worldwide, with multi-currency donations, campaign fundraising, QR-code giving, and Stripe Connect payouts.',
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Stripe Connect'],
  },
  {
    name: 'PanditDesk',
    context: 'Avison Technologies · Contributed to development & testing',
    description:
      'A multi-tenant practice-management platform for Hindu priests in the United States: customers, ceremonies, reminders, payments, and messaging in one place.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
  },
]
