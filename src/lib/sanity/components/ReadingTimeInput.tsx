import React from 'react'
import ReadingTime from 'reading-time'
import { type FieldMember, type NumberInputProps, set, defineType } from 'sanity'
import { Box, Button, Flex } from '@sanity/ui'

export const readingTimeType = defineType({
  name: 'readingTime',
  title: 'Reading Time',
  description: '给定内容的估计阅读时间（分钟）',
  type: 'number',
  components: {
    input: ReadingTimeInput
  }
})

type SanityBlock = {
  _type: string
  children?: SanityBlock[]
  text?: string
}

function flattenBlocks(blocks: SanityBlock[]): string[] {
  return blocks.flatMap(block => {
    if (block.text) {
      return [block.text]
    }

    if (block.children) {
      return flattenBlocks(block.children)
    }

    return []
  })
}

export default function ReadingTimeInput(props: NumberInputProps) {
  const value = React.useDeferredValue(props.value)
  const { schemaType } = props
  // const { members } = useFormBuilder()

  const generate = React.useCallback(() => {
    // find the member that has the key of "body"
    const bodyMember = [].find((member: { kind: string; name: any }) => {
      if (member.kind === 'field') {
        // @ts-ignore
        return member.name === schemaType.options?.source ?? 'body'
      }
      return false
    }) as FieldMember | undefined
    if (!bodyMember) {
      return
    }

    const rt = ReadingTime(flattenBlocks(bodyMember.field.value as SanityBlock[]).join('\n'))
    props.onChange(set(rt.minutes))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onChange, schemaType.options])

  return (
    <Flex gap={3} align='center'>
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Button mode='ghost' onClick={generate}>
        Generate
      </Button>
    </Flex>
  )
}
