interface MajorCredits {
    credits: number;
    brand: 'Major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'Minor';
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits, brand: 'Major' };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits, brand: 'Minor' };
  }
  
  const subject1: MajorCredits = { credits: 10, brand: 'Major' };
  const subject2: MajorCredits = { credits: 20, brand: 'Major' };
  
  const subject3: MinorCredits = { credits: 5, brand: 'Minor' };
  const subject4: MinorCredits = { credits: 15, brand: 'Minor' };
  
  console.log(sumMajorCredits(subject1, subject2));
  console.log(sumMinorCredits(subject3, subject4));