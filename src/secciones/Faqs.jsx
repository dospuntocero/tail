const faqs = [
    {
        question: 'How do you make holy water?',
        answer:
          'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
      },
      {
        question: 'How do you know google\'s AI?',
        answer:
          'It dies everytime, so we don\'t know if its proficent enough. we think it sadly sucks and will die as all other cool G ideas.',
      },
    
  ]
  
  export default function Faqs() {
    return (
      <div className="bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold tracking-tight leading-10 text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Can't find the answer you’re looking for? Reach out to our{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  customer support
                </a>{' '}
                team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  