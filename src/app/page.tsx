export default function Home() {
  return (
    <div className='p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4'>
      <h1 className='text-4xl font-bold text-center text-gray-900'>
        You&apos;re Invited to Bookless Bookclub! 📚
      </h1>
      <div className='text-gray-700 text-center space-y-4'>
        <p>
          ​​​Each <span className='font-bold'>Tuesday evening</span>, we gather
          the most curious and thoughtful people in Austin to read together and
          talk about it. All genres welcome!
        </p>
        <p>
          ​​​Bookless Bookclub isn&apos;t just about what you&apos;re reading.
          It&apos;s not even about a single book or genre. It&apos;s about
          creating connections around the topics you love.
        </p>
        <p>
          ​Bring whatever you want to read, in whatever format. It could be a
          book, a newspaper, a scientific article. It could even be a letter
          from your grandma. Shout out Nana!
        </p>
        <p>​Parking is across the street on Toomey Rd.</p>

        <ul className='list-none'>
          <p className='font-bold text-gray-700 text-center'>
            H​​​ere&apos;s the schedule:
          </p>
          <li>
            <span className='font-bold'>​​​6:20-6:30 pm:</span> Meet outside,
            get to know your neighbors.
          </li>
          <li>
            <span className='font-bold'>​​​6:30:</span> Grab a seat and intro
            yourself to the folks around you. Share what you&apos;re reading
            today, and why it interests you.
          </li>
          <li>
            ​​​<span className='font-bold'>6:45-7:45:</span> Dedicated silent
            reading time.
          </li>
          <li>
            <span className='font-bold'>​​​7:45:</span> Reconvene and chat about
            what we read.
          </li>
          <li className='font-italic'>
            (If you&apos;re in a groove, feel free to keep reading instead)
            Leave when you want! Casa closes at 8:30pm.
          </li>
        </ul>
      </div>
      <div className='text-center'>
        <p>​​​Can&apos;t wait to see you there!</p>
        <p>​Cheers,</p>
        <p>​​Lincoln ☀️</p>
      </div>
      <div className='text-gray-700 text-center'>
        <p>Location:</p>
        <b>
          <a
            className='text-blue-600 hover:text-blue-800 no-underline hover:underline transition duration-200 ease-in-out'
            href='https://www.google.com/maps/search/?api=1&query=Casa%20de%20Luz%20Village&query_place_id=ChIJ8flvkhe1RIYRLQ4n--ovbts'
            target='_blank'
          >
            Casa de Luz Village
          </a>
        </b>
        <p>Casa de Luz Village, 1701 Toomey Rd, Austin, TX 78704, USA</p>
        <p>Meet in the front yard outside Casa.</p>
      </div>
      <div className='text-center'>
        <a
          className='mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition'
          href='https://lu.ma/booklessbookclub'
          target='_blank'
        >
          RSVP Now
        </a>
      </div>
    </div>
  );
}
